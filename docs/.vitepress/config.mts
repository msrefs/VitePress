import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Neotec.",
  description: "Official Description/Dashboard Pages of Neotec.",
  head: [
  ['link', { rel: 'stylesheet', href: '/theme/style.css' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于', link: '/about' },
      { text: '文档', link: '/documents' }
    ],
    
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/start' },
          { text: '常见问题', link: '/issues' },
          { text: '服务器状态', link: '/serverstatus' }
        ]
      },
      {
        text: '法律性文件',
        items: [
          { text: '服务条款', link: '/service-term' },
          { text: '隐私政策', link: '/privacy-policy' },
          { text: '开源许可证', link: '/opensource-license' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/msrefs' }
    ]
  }
})
