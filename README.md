# Vite + Eleventy + Tailwind CSS project

This project is a front-end development environment for Vite + Eleventy + Tailwind CSS.

## 🛠 Technology Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
- **Build Tools**: [Vite](https://vitejs.dev/)
- **Template Engine**: [EJS](https://ejs.co/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **CSS Preprocessor**: [Sass](https://sass-lang.com/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/)
- *Node.js Version Control**: [Volta](https://volta.sh/)

## 📋 Prerequisites

- **Node.js**: 24.1.0 以上 (Volta Recommendation)
- **npm**: Latest version

### Volta Settings

This project uses Volta for Node.js version control.
It will work without Volta, but using Volta makes it easier to manage Node.js versions.

## 🚀 Setup

### 1. Installing dependencies

```
npm install
```

### 2. Starting the development server

```
npm run dev
```

In your browser `http://localhost:5173` You can check out the site by visiting:

## 📂 Project Structure

```
root/
├── src/ # Source files
│ ├── _data/ # Eleventy data files
│ ├── _includes/ # Template files
│ │ ├── layouts/ # Layout templates
│ │ └── parts/ # Part templates
│ ├── assets/ # Asset files
│ │ ├── css/ # SCSS files
│ │ ├── images/ # Image files
│ │ └── js/ # JavaScript files
│ ├── business/ # Business introduction page
│ ├── company/ # Company information page
│ ├── news/ # News page
│ └── *.ejs # Various page files
├── public/ # Static assets
├── vite-plugins/ # Custom Vite plugins
└── dist/ # Build output (generated)
```

## 🧑‍💻 Development Commands

| Command | Description |
|---------|------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the build results |
| `npm run lint` | Run ESLint + Stylelint |
| `npm run lint:fix` | Automatically fix lint issues |
| `npm run eslint` | Run ESLint only |
| `npm run eslint:fix` | Automatic ESLint fixes |
| `npm run stylelint` | Run Stylelint only |
| `npm run stylelint:fix` | Automatic Stylelint fixes |

## 🎨 CSS Development

### Tailwind CSS

This project uses Tailwind CSS, a utility-first CSS framework.

- Configuration file: `tailwind.config.js`
- Plugins: `@tailwindcss/typography`
- Purging targets: `./src/**/*.{html,ejs,js,ts}`

### Sass/SCSS

Sass is used for custom styles.

- Main file: `src/assets/css/style.scss`
- Module structure:
- `base/`: Base styles
- `components/`: Component styles
- `modules/`: Page module styles
- `global/`: Global variables and mixins

## 📷 Image Optimization

The Sharp plugin provides automatic image optimization.

- Converted to WebP format
- Optimized with appropriate compression

When you add png or jpg images during development (running `npm run dev`), converted WebP images will be automatically generated in the same directory.
*However, this only applies to images under src/assets/images/.
*WebP images under src/assets/images/ are not committed. (Only original png and jpg images are committed.)

During the build, all images are optimized and output to `dist/assets/images/`.

## 🔧 Linting & Formatting

### ESLint

- JavaScript/TypeScript code quality checks
- Configuration file: `eslint.config.js`

### Stylelint

- CSS/SCSS style checks
- Configuration file: `stylelint.config.js`
- Rules:
  - `stylelint-config-standard-scss`
  - `stylelint-config-recess-order`
  - `stylelint-config-tailwindcss`

### Prettier

- Code Formatter
- Configuration File: `prettier.config.js`

### Lefthook (Git Hooks)

- Automatic Linting Pre-Commit
- Configuration File: `lefthook.yml`

## 🏗 Build Settings

### Vite Settings (`vite.config.js`)

- **Root Directory**: `src`
- **Public Directory**: `public`
- **Output Directory**: `dist`
- **Plugins**:
- `vite-plugin-eleventy`: Eleventy Integration
- `sharp-optimizer`: Image Optimization

### Asset Output Settings

```
// JavaScript file
assets/js/[name].js

// CSS file
assets/css/[name].min.css

// Image file
assets/images/[name].[ext]
```

## 📋 Site Settings (`src/_data/site.js`)

### Overview

`src/_data/site.js` is Eleventy's global data file. It centrally manages settings used across the entire site (metadata, OGP information, SEO settings, etc.).

### Settings

| Property | Description | Usage Example |
|-----------|------|--------|
| `title` | Site title | Default value for the `<title>` tag |
| `description` | Site description | Default value for `<meta name="description">` |
| `keywords` | Keywords | Default value for `<meta name="keywords">` |
| `url` | Site URL | Canonical URL, Open Graph Settings |
| `ogType` | Open Graph Type | Open Graph Type Attribute |
| `author` | Author/Company Name | `<meta name="author">` |
| `siteName` | Site Name | Open Graph Site Name |
| `ogImage` | Open Graph Image | Image for Social Media Sharing |
| `twitterCard` | Twitter Card Type | Twitter Sharing Settings |
| `twitterImage` | Twitter Image | Image for Twitter Sharing |

### How to Use in Templates

#### Basic Usage

You can access it in EJS templates as the `site` object:

```ejs
<!-- Using the Site Title -->
<title><%= site.title %></title>

<!-- Use site description -->
<meta name="description" content="<%= site.description %>">

<!-- Using OGP settings -->
<meta property="og:title" content="<%= site.title %>">
<meta property="og:image" content="<%= site.ogImage %>">
```

#### Fallback Settings

If individual settings are specified for each page, they take precedence. If not, the value in `site.js` is used as a fallback:

```ejs
<!-- Use the page-specific title if it exists; otherwise, use the site title -->
<title><%= typeof title !== 'undefined' ? title : site.title %></title>

<!-- Use the page-specific description if it exists; otherwise, use the site description -->
<meta name="description" content="<%= typeof description !== 'undefined' ? description : site.description %>">
```

### Individual Settings in Front Matter

Individual settings can be made in Front Matter for each page file:

```ejs
---
layout: layouts/base
title: Page title | Corporate Website
description: Page description
keywords: Keywords, Keywords, Keywords, Keywords, Keywords
url: https://example.com/dummy/index.html
---
```

### Example of use in a layout template

**Example of use in `src/_includes/layouts/base.ejs`:**

```ejs
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title><%= typeof title !== 'undefined' ? title : site.title %></title>
  <meta name="description" content="<%= typeof description !== 'undefined' ? description : site.description %>">
  <meta name="keywords" content="<%= typeof keywords !== 'undefined' ? keywords : site.keywords %>">
  <meta name="author" content="<%= typeof author !== 'undefined' ? author : site.author %>">
  
  <!-- OGP設定 -->
  <meta property="og:title" content="<%= typeof title !== 'undefined' ? title : site.title %>">
  <meta property="og:description" content="<%= typeof description !== 'undefined' ? description : site.description %>">
  <meta property="og:type" content="<%= typeof ogType !== 'undefined' ? ogType : site.ogType %>">
  <meta property="og:url" content="<%= typeof url !== 'undefined' ? url : site.url %>">
  <meta property="og:image" content="<%= typeof ogImage !== 'undefined' ? ogImage : site.ogImage %>">
  <meta property="og:site_name" content="<%= typeof siteName !== 'undefined' ? siteName : site.siteName %>">
  
  <!-- Twitter Card設定 -->
  <meta name="twitter:card" content="<%= typeof twitterCard !== 'undefined' ? twitterCard : site.twitterCard %>">
  <meta name="twitter:title" content="<%= typeof title !== 'undefined' ? title : site.title %>">
  <meta name="twitter:description" content="<%= typeof description !== 'undefined' ? description : site.description %>">
  <meta name="twitter:image" content="<%= typeof twitterImage !== 'undefined' ? twitterImage : site.twitterImage %>">
</head>
<body>
  <%- content %>
</body>
</html>
```

### Adding New Settings

If you have settings you want to use site-wide, you can add them to `site.js`:

```javascript
export default {
// Existing settings...
siteName: 'Corporate Site, Inc.',

// Example of new settings
socialMedia: {
twitter: 'https://twitter.com/dummycompany',
linkedin: 'https://linkedin.com/company/dummycompany'
}
};
```

Use in template:

```ejs
<!-- Use new settings -->
<a href="<%= site.socialMedia.twitter %>">Twitter</a>
<a href="<%= site.socialMedia.linkedin %>">LinkedIn</a>
```
