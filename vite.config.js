import { eleventyPlugin } from "vite-plugin-eleventy";
import { sharpOptimizer } from "./vite-plugins/sharp-optimizer.js";
import serveEjsDynamic from "./vite-plugins/serve-ejs-dynamic.js";
import { rimraf } from "rimraf";
import { build as esbuild } from "esbuild";
import fs from "fs";
import path from "path";

export default ({ command }) => {
  const isBuild = command === "build";

  return {
    base: "./",
    root: "src",
    publicDir: "../public",

    plugins: [
      serveEjsDynamic(),
      eleventyPlugin(),
      sharpOptimizer(),

      // Chỉ dọn dẹp thư mục khi build xong
      {
        name: "clean-store-folder",
        closeBundle() {
          if (isBuild) {
            rimraf("dist/assets/js/.js");
            rimraf("dist/assets/.css.");
            rimraf("dist/assets/images/top");
          }
        }
      },

      // Chỉ bundle bằng esbuild sau khi build xong hoàn toàn
      {
        name: "post-build-esbuild-bundle",
        async closeBundle() {
          if (!isBuild) return;

          const jsPath = path.resolve("dist/assets/js/script.js");
          if (fs.existsSync(jsPath)) {
            try {
              await esbuild({
                entryPoints: [jsPath],
                outfile: jsPath,
                bundle: true,
                allowOverwrite: true,
                format: "iife",
                globalName: "App",
                minify: false,
                platform: "browser",
              });
            } catch (error) {
              console.error("❌ Lỗi xử lý hậu kỳ với Esbuild:", error);
            }
          }
        }
      },

      // Điều chỉnh HTML linh hoạt giữa Dev và Build
      {
        name: "html-replace-script",
        transformIndexHtml(html) {
          // Chuẩn hóa dấu gạch chéo
          html = html.replace(/\\/g, "/");

          // Các logic thay thế script/style ép buộc này CHỈ áp dụng khi BUILD
          if (isBuild) {
            html = html.replace(/src="\.\/assets\/js\/\.js"/g, "src=\"./assets/js/script.js\"");
            html = html.replace(/href="\.\/assets\/\.css\."/g, "href=\"./assets/css/style.css\"");

            html = html.replace(/<script\s+type="module"\s+crossorigin\s+src="[^"]*assets\/js\/(script|common)\.js"><\/script>/g, "");
            html = html.replace(/<script\s+type="module"\s+src="[^"]*assets\/js\/(script|common)\.js"><\/script>/g, "");
            html = html.replace(/<script\s+crossorigin\s+src="[^"]*assets\/js\/(script|common)\.js"><\/script>/g, "");

            if (!html.includes("src=\"./assets/js/script.js\"")) {
              html = html.replace("</body>", "<script src=\"./assets/js/script.js\" defer></script>\n</body>");
            }

            html = html.replace(
              "<link rel=\"stylesheet\" crossorigin href=\"./assets/css/style.css\">",
              "<link rel=\"stylesheet\" href=\"./assets/css/style.css\">"
            );
          }

          // Các chỉnh sửa đường dẫn component dùng chung (áp dụng cho cả hai môi trường)
          html = html.replace(
            "<link rel=\"stylesheet\" href=\"./common/footer/style.css\">",
            "<link rel=\"stylesheet\" href=\"/common/footer/style.css\">"
          );

          html = html.replace(
            "<script type=\"module\" src=\"./common/footer/script.js\"></script>",
            "<script type=\"module\" src=\"/common/footer/script.js\">"
          );

          return html;
        }
      }
    ],

    build: {
      outDir: "../dist",
      emptyOutDir: true,
      modulePreload: false,
      chunkSizeWarningLimit: 3000,
      // Rollup Options chỉ hoạt động khi chạy lệnh `vite build`
      rollupOptions: {
        input: {
          // Giữ nguyên cấu hình entry point của bạn cho đầu ra production
          script: "src/assets/js/common.js",
          style: "src/assets/css/style.scss",
        },
        external: [],
        treeshake: true,
        output: {
          entryFileNames: "assets/js/[name].js",
          chunkFileNames: "assets/js/[name].js",
          assetFileNames: (assetsInfo) => {
            const fontRegex = /\.(woff2?|ttf|otf|eot)$/i;
            const imageRegex = /\.(png|jpe?g|gif|webp|svg)$/i;

            if (
              assetsInfo.names.includes("style.css") ||
              assetsInfo.names.includes("strcss.css")
            ) {
              const name = assetsInfo.names[0].replace(".css", "");
              if (name === "strcss") {
                return "assets/css/str.[ext]";
              }
              return "assets/css/[name].[ext]";
            } else if (assetsInfo.names.some((item) => imageRegex.test(item))) {
              return "assets/images/[name].[ext]";
            } else if (assetsInfo.names.some((item) => fontRegex.test(item))) {
              return "assets/fonts/[name].[ext]";
            } else {
              return "assets/[name].[ext]";
            }
          }
        },
      },
    },
  };
};
