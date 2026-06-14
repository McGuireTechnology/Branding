import DefaultTheme from 'vitepress/theme'
import ShadcnVueDemo from './components/branding/ShadcnVueDemo.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ShadcnVueDemo', ShadcnVueDemo)
  }
}
