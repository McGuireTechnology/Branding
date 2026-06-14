import DefaultTheme from 'vitepress/theme'
import BrandShowcase from './components/branding/BrandShowcase.vue'
import ShadcnVueDemo from './components/branding/ShadcnVueDemo.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BrandShowcase', BrandShowcase)
    app.component('ShadcnVueDemo', ShadcnVueDemo)
  }
}
