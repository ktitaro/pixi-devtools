import { Text } from 'pixi.js'
import { Graphics } from 'pixi.js'
import { Container } from 'pixi.js'

export class PlayButton extends Container {
    private _width = 300
    private _height = 100

    constructor() {
        super()
        this.label = 'PlayButton'
        this.addBackground()
        this.addLabelText()
    }

    private addLabelText() {
        const widget = new Text()
        widget.text = 'Click to play!'
        widget.anchor.x = 0.5
        widget.anchor.y = 0.5
        widget.style.fill = '#fff'
        widget.style.fontSize = 28
        widget.style.fontWeight = 'bold'
        this.addChild(widget)
    }

    private addBackground() {
        const widget = new Graphics()
        widget.pivot.x = this._width / 2
        widget.pivot.y = this._height / 2
        widget.roundRect(0, 0, this._width, this._height, 24)
        widget.fill({ color: '#fff', alpha: 0.25 })
        widget.stroke({ width: 4, alpha: 0.5, color: '#fff' })
        this.addChild(widget)
    }
}
