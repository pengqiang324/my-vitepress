// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import elementPlus from 'element-plus'
import { useComponents } from './useComponents'

import './styles/index.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import "element-plus/dist/index.css";
import 'application-theme-plus/lib/theme-plus.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(elementPlus);
    useComponents(app)
  }
};

