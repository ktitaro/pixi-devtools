import 'normalize.css'
import { HomePage } from './scenes'
import { Application } from 'pixi.js'

// Configures the game app
const app = new Application()
await app.init({ resizeTo: window })
document.body.appendChild(app.canvas)
window.__APP__ = app
export { app }

// Renders the initial scene
app.stage.addChild(new HomePage())
app.renderer.render(app.stage)
