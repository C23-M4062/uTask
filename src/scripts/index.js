import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/media.css'
import '../styles/drawer'
import '../styles/scroll'
import App from './views/app'

const app = new App({
  button: document.querySelector('button'),
  burger: document.querySelector('.burger'),
  drawer: document.querySelector('.drawer'),
  content: document.querySelector('main')
})

// Render
window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})