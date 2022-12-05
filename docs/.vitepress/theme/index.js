// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";
import 'application-theme-plus/lib/theme-plus.css'
import Test from '../../guide/test.vue'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    import("element-plus").then((module) => {
      app.use(module);
    })
    app.component('Test', Test)
  }
};

