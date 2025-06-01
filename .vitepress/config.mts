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

  srcDir: '.',

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
        <span class="footer-item">CDN加速由 Vercel 提供</span>
      `,
      copyright: 'Minecraft是Mojang Studios的商标，本站与Mojang和Microsoft没有从属关系。'
    },  
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我们', link: '/about' },
      { text: 'Minecraft整合包', link: '/modpacks' },
      {
        text: "Minecraft服务器",
        items: [
          { text: '快速开始', link: '/start' },
          { text: '服务器状态', link: '/serverstatus' }
        ],
      },
      {
        text: "法律性文件",
        items: [
          { text: '服务条款', link: '/service-term' },
          { text: '隐私政策', link: '/privacy-policy' },
          { text: '开源许可证', link: '/opensource-license' }
        ],
      },
    ],
    
    sidebar: [
      {
        text: '基本信息',
        items: [
          { text: '关于我们', link: '/about' }
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

      editLink: {
      pattern: "https://github.com/msrefs",
      text: "向我们反馈问题",
    },
    search: {
      provider: "local",
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) {
            return "";
          }
          return html;
        },
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      },
    },
    externalLinkIcon: true, // 展示站外链接箭头 ↗
    // 下方是文档中文适配内容
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outlineTitle: '本页目录',
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  }
})
