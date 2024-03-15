import { Text } from 'pixi.js'
import { Container } from 'pixi.js'

export class GameLabel extends Container {
    constructor() {
        super()
        this.label = 'GameLabel'
        this.addLabelText()
    }

    private addLabelText() {
        const widget = new Text()
        widget.text = 'There is no game yet!'
        widget.anchor.x = 0.5
        widget.anchor.y = 0.5
        widget.style.fill = '#fff'
        widget.style.fontSize = 28
        widget.style.fontWeight = 'bold'
        this.addChild(widget)
    }
}
