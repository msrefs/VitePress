import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title: "Neotec.",
  description: "Official Description/Dashboard Pages of Neotec.",
  head: [
    ['link', { rel: 'stylesheet', href: '/theme/style.css' }]
  ],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },

  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src')
      }
    }
  },


  themeConfig: {
    footer: {
      message: `
        <span class="footer-item">Copyright © 2022-2025 Neotec, All Rights Reserved.</span>
        <span class="footer-separator">|</span>
        <span class="footer-item"><a href="https://icp.gov.moe/?keyword=20250178/" target="_blank">萌ICP备20250178号</a></span>
        <span class="footer-separator">|</span>
        <span class="footer-item">Powered by VitePress</span>
      `,
      copyright: 'Minecraft是Mojang Studios的商标，本站与Mojang和Microsoft没有从属关系。'
    },  
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于', link: '/about' },
      { text: 'Minecraft 服务器', link: '/mcs' }
    ],
    
    sidebar: [
      {
        text: '基本信息',
        items: [
          { text: '关于我们', link: '/about' },
          { text: '成员信息', link: '/member' }
        ]
      },
      {
        text: 'Minecraft 服务器',
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
