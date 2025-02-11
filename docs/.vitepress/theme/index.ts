// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title': () => h('div', { class: 'nav-icon' }, [
        h('img', { src: '/icon.png', alt: 'Icon', style: 'margin-right: 8px;' }),
        h('span', 'Bookify')
      ])
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}