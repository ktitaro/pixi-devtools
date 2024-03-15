import * as PIXI from 'pixi.js'

declare global {
    interface Window {
        __PIXI_DEVTOOLS_APP__: PIXI.Application
    }
}