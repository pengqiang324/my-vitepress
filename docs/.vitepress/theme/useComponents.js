import { Content, Search, SearchController } from 'application-theme-plus'
import Test from '../../guide/test.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents(app) {
    app.component('t-content', Content)
    app.component(Search.name, Search)
    app.component(SearchController.name, SearchController)
    app.component('Test', Test)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
}