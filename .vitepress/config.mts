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
    logo: { src: "/logo-square.svg"},
    footer: {
      message: `
        <span class="footer-item">Copyright © 2022-2025 Neotec, All Rights Reserved.</span>
        <span class="footer-separator">|</span>
        <span class="footer-item"><a href="https://icp.gov.moe/?keyword=20250178/" target="_blank">萌ICP备20250178号</a></span>
        <span class="footer-separator">|</span>
        <span class="footer-item">Powered by VitePress</span>
        <span class="footer-separator">|</span>
        <span class="footer-item">CDN加速由Netlify, Amazon提供</span>
      `,
      copyright: 'Minecraft是Mojang Studios的商标，本站与Mojang和Microsoft没有从属关系。'
    },  
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我们', link: '/about' },
      { text: '团队成员', link: '/member' },
      { text: 'Minecraft整合包', link: '/modpacks' },
      { text: 'Minecraft服务器', link: '/start' },
      { text: '服务器状态', link: '/serverstatus' },
      { text: '服务条款', link: '/service-term' },
      { text: '隐私政策', link: '/privacy-policy' }
    ],
    
    sidebar: [
      {
        text: '基本信息',
        items: [
          { text: '关于我们', link: '/about' },
          { text: '团队成员', link: '/member' }
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
        text: 'Minecraft 整合包',
        items: [
          { text: '概述', link: '/modpacks' },
          { text: '整合包：Neo', link: '/modpack-Neo' },
          { text: '整合包：Neutron', link: '/modpack-Neutron' },
          { text: '早期整合包', link: '/modpack-discarded' },
          { text: '常见问题', link: '/modpack-issues' },
          { text: '维护状态', link: '/modpack-status' }
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
