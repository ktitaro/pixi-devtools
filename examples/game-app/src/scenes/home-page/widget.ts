import { app } from '../../main'
import { Container } from 'pixi.js'
import { GamePage } from '../game-page'
import { PlayButton } from '../../widgets'

export class HomePage extends Container {
    constructor() {
        super()
        this.label = 'HomePage'
        this.addPlayButton()
    }

    private addPlayButton() {
        const widget = new PlayButton()
        widget.interactive = true
        widget.position.x = (app.screen.width / 2)
        widget.position.y = (app.screen.height / 2)
        widget.onclick = () => this.moveToGamePage()
        this.addChild(widget)
    }

    private moveToGamePage() {
        app.stage.removeChildAt(0)
        app.stage.addChild(new GamePage())
        app.renderer.render(app.stage)
    }
}
