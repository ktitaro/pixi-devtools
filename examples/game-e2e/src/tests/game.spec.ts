import { test, expect } from '@playwright/test'
import { clickWidgetByName } from '@pixi-devtools/e2e'

// An async version of setTimeout that we can use to suspend execution
// for the given number of milliseconds. Very usefull to actually see
// the preloaded game canvas before running the tests.
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

test('Button has a correct label', async ({ page }) => {
    await page.goto('/')
    await sleep(1000)

    const label = await page.evaluate(() => {
        const appWidget = window['__APP__'].stage
        const btnWidget = appWidget.getChildByName('PlayButton', true)
        const textWidget = (btnWidget as any).getChildAt(1)
        return textWidget.text
    })

    expect(label).toBe('Click to play!')
})

test('After button click we move to another screen', async ({ page }) => {
    await page.goto('/')
    await sleep(1000)

    await clickWidgetByName(page, 'PlayButton')
    await sleep(1000)

    // const btnPosition = await page.evaluate(() => {
    //     const appWidget = window['__APP__'].stage
    //     const btnWidget = appWidget.getChildByName('PlayButton', true)
    //     return (btnWidget as any).getGlobalPosition()
    // })

    // const { x, y } = btnPosition
    // await page.mouse.click(x, y)
    // await sleep(1000)

    const label = await page.evaluate(() => {
        const appWidget = window['__APP__'].stage
        const labelWidget = appWidget.getChildByName('GameLabel', true)
        const textWidget = (labelWidget as any).getChildAt(0)
        return textWidget.text
    })

    expect(label).toBe('There is no game yet!')
})
