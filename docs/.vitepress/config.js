import { demoBlockPlugin } from 'vitepress-theme-demoblock'
export default {
    title: 'application-theme', //站点标题
    description: '微前端业务组件UI',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
        siteTitle: "application-theme",
        logo: "/logo.png",
        nav: [
            // { text: '博客', link: '/articles/组件库环境搭建' },
            { text: "指南", link: "/guide/" },
            // { text: "GuideTest", link: "/guide/test" },
            // { text: "gitee", link: "https://gitee.com/geeksdidi" },
            // {
            //     text: "Drop Menu",
            //     items: [
            //         { text: 'Item A', link: '/item-1' },
            //         { text: 'Item B', link: '/item-2' }
            //     ]
            // },
            // {
            //     text: "Drop Menu",
            //     items: [
            //         {
            //             items: [
            //                 { text: "Item A1", link: "/item-A1" },
            //                 { text: "Item A2", link: "/item-A2" },
            //             ],
            //         },
            //         {
            //             items: [
            //                 { text: "Item B1", link: "/item-B1" },
            //                 { text: "Item B2", link: "/item-B2" },
            //             ],
            //         }
            //     ]
            // }
        ],
        sidebar: {
            '/articles': [
                {
                    text: "组件库源码实现",
                    items: [
                        { text: "组件库环境搭建", link: "/articles/组件库环境搭建" },
                        { text: "gulp的使用", link: "/articles/gulp的使用" }
                    ]
                },
                {
                    text: "vue教程",
                    collapsible: true,
                    collapsed:true,
                    items: [
                        {
                            text: "pina和vuex",
                            link: "/articles/pina和vuex",
                        },
                    ]
                }
            ], 
            "/guide": [
                {
                    text: "基础",
                    items: [
                        {
                        text: "安装",
                        link: "/guide/",
                        },
                        {
                            text: "快速开始",
                            link: "/guide/quickstart",
                        },
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: "github", link: "https://gitee.com/geeksdidi" },
            { icon: "twitter", link: "..." },
            // You can also add custom icons by passing SVG as string:
            // {
            //     icon: {
            //         svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
            //     },
            //     link: "...",
            // },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Pengqiang'
        }
    },
    markdown: {
        headers: {
            level: [0, 0]
        },

        // options for markdown-it-anchor
        anchor: { permalink: false },

        // options for markdown-it-toc
        toc: { includeLevel: [1, 2] },

        // light: #f9fafb, dark: --vp-code-block-bg
        theme: { light: 'github-light', dark: 'github-dark' },

        config: (md) => {
            md.use(demoBlockPlugin, {
                cssPreprocessor: 'less'
            }) 
        }
  }
}