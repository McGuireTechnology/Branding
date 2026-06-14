import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'McGuire Technology - Branding',
  description: 'Public branding, identity, messaging, and project reference guidance for McGuire Technology, LLC.',
  head: [
    ['link', { rel: 'icon', href: '/brand-assets/favicon.svg', type: 'image/svg+xml' }]
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./theme', import.meta.url))
      }
    }
  },
  themeConfig: {
    nav: [
      { text: 'Branding', link: '/' },
      { text: 'Messaging', link: '/messaging' },
      { text: 'Visual Identity', link: '/visual-identity' },
      { text: 'Project Reference', link: '/project-reference' }
    ],
    sidebar: [
      {
        text: 'Branding',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Messaging', link: '/messaging' },
          { text: 'Visual Identity', link: '/visual-identity' },
          { text: 'Project Reference', link: '/project-reference' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/McGuireTechnology/Branding' }
    ]
  }
})
