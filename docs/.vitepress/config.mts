import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bookify",
  description: "Alireza abassi",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Domain Layer",
        items: [
          { text: "Get Started", link: "/docs/domain-layer/index.md" },
          { text: "Entities", link: "/docs/domain-layer/entities.md" },
        ],
      },
      {
        text: "Application layer",
        items: [
          { text: "Get Started", link: "/docs/domain-layer/index.md" },
          { text: "Entities", link: "/docs/domain-layer/entities.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
