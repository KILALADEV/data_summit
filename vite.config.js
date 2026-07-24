import { eleventyPlugin } from "vite-plugin-eleventy";
import { sharpOptimizer } from "./vite-plugins/sharp-optimizer.js";
import serveEjsDynamic from "./vite-plugins/serve-ejs-dynamic.js";
import { rimraf } from "rimraf";
import { build as esbuild } from "esbuild";
import fs from "fs";
import path from "path";
import beautify from "js-beautify";

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
      {
        name: "clean-store-folder",
        closeBundle() {
          if (isBuild) {
            rimraf("dist/assets/js/.js");
            rimraf("dist/assets/.css.");
            rimraf("dist/assets/common.css");
            rimraf("dist/assets/js/common.js");
            rimraf("dist/assets/images/top");
          }
        }
      },

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

      {
        name: "html-replace-script",
        transformIndexHtml(html, ctx) {
          if (isBuild) {
            const rootPath = path.resolve("src");
            const currentHtmlPath = path.dirname(ctx.filename);

            const relativeDir = path.relative(rootPath, currentHtmlPath).replace(/\\/g, "/");
            const depth = relativeDir ? relativeDir.split("/").filter(Boolean).length : 0;
            const relativePrefix = depth > 0 ? "../".repeat(depth) : "./";

            const targetJs = `${relativePrefix}assets/js/script.js`;
            const targetCss = `${relativePrefix}assets/css/style.css`;
            const targetResetCss = `${relativePrefix}assets/css/reset.css`;
            const targetFaviconPng = `${relativePrefix}favicon.png`;
            const targetFaviconIco = `${relativePrefix}favicon.ico`;

            html = html.replace(/\s*<script\s+type="module"\s+crossorigin\s+src="[^"]*assets\/js\/(script|common)\.js"><\/script>\s*/gi, "\n");
            html = html.replace(/\s*<script\s+type="module"\s+src="[^"]*assets\/js\/(script|common)\.js"><\/script>\s*/gi, "\n");
            html = html.replace(/\s*<script\s+crossorigin\s+src="[^"]*assets\/js\/(script|common)\.js"><\/script>\s*/gi, "\n");
            html = html.replace(/\s*<link\s+[^>]*href="[^"]*assets\/common\.css"[^>]*>\s*/gi, "\n");

            html = html.replace(/src="\.\/assets\/js\/\.js"/g, `src="${targetJs}"`);
            html = html.replace(/href="\.\/assets\/\.css\."/g, `href="${targetCss}"`);

            // ĐOẠN ĐÃ SỬA: Quét sạch mọi định dạng cũ (./favicon.webp, /favicon.png) để đưa về đúng link theo cấp bậc
            html = html.replace(/href="[^"]*favicon\.(png|webp|ico)"/gi, (match) => {
              if (match.toLowerCase().includes(".ico")) {
                return `href="${targetFaviconIco}"`;
              }
              return `href="${targetFaviconPng}"`;
            });

            if (!html.includes(`src="${targetJs}"`)) {
              html = html.replace("</body>", `<script src="${targetJs}" defer></script>\n</body>`);
            }

            if (!html.includes(`href="${targetCss}"`)) {
              html = html.replace("</head>", `<link rel="stylesheet" href="${targetCss}">\n</head>`);
            }

            if (!html.includes(`href="${targetResetCss}"`)) {
              html = html.replace("</head>", `<link rel="stylesheet" href="${targetResetCss}">\n</head>`);
            }

            html = beautify.html(html, {
              indent_size: 4,
              indent_char: " ",
              max_preserve_newlines: 1,
              preserve_newlines: false,
              keep_array_indentation: false,
              end_with_newline: true,
              indent_inner_html: true,
              extra_liners: [],
              indent_scripts: "normal"
            });
          }

          return html;
        }
      }
    ],

    build: {
      outDir: "../dist",
      emptyOutDir: true,
      modulePreload: false,
      chunkSizeWarningLimit: 3000,
      rollupOptions: {
        input: {
          script: "src/assets/js/common.js",
          style: "src/assets/css/style.scss",
          reset: "src/assets/css/reset.scss",
        },
        external: [],
        treeshake: true,
        output: {
          entryFileNames: "assets/js/[name].js",
          chunkFileNames: "assets/js/[name].js",
          assetFileNames: (assetsInfo) => {
            const fontRegex = /\.(woff2?|ttf|otf|eot)$/i;
            const imageRegex = /\.(png|jpe?g|gif|webp|svg)$/i;

            if (assetsInfo.names.some(name => name.toLowerCase().includes("favicon"))) {
              return "[name].[ext]";
            }

            if (
              assetsInfo.names.includes("style.css") ||
              assetsInfo.names.includes("reset.css") ||
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
