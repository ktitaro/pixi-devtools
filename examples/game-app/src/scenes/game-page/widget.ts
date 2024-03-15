import { app } from '../../main'
import { Container } from 'pixi.js'
import { GameLabel } from '../../widgets'

export class GamePage extends Container {
    constructor() {
        super()
        this.label = 'GamePage'
        this.addGameLabel()
    }

    private addGameLabel() {
        const widget = new GameLabel()
        widget.position.x = (app.screen.width / 2)
        widget.position.y = (app.screen.height / 2)
        this.addChild(widget)
    }
}
