import { setupDevtools } from '@pixi-devtools/plugin'
import { Application } from 'pixi.js'
import { HomePage } from './scenes'
import 'normalize.css'

// Configures the game app
const app = new Application()
await app.init({ resizeTo: window })
document.body.appendChild(app.canvas)
setupDevtools(app)

// Renders the initial scene
app.stage.addChild(new HomePage())
app.renderer.render(app.stage)
export { app }
