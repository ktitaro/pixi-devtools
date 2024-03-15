import { test, expect } from '@playwright/test'

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
        const textWidget = btnWidget.getChildAt(1)
        return textWidget.text
    })

    expect(label).toBe('Click to play!')
})

test('After button click we move to another screen', async ({ page }) => {
    await page.goto('/')
    await sleep(1000)

    const btnPosition = await page.evaluate(() => {
        const appWidget = window['__APP__'].stage
        const btnWidget = appWidget.getChildByName('PlayButton', true)
        return btnWidget.getGlobalPosition()
    })

    const { x, y } = btnPosition
    await page.mouse.click(x, y)
    await sleep(1000)

    const label = await page.evaluate(() => {
        const appWidget = window['__APP__'].stage
        const labelWidget = appWidget.getChildByName('GameLabel', true)
        const textWidget = labelWidget.getChildAt(0)
        return textWidget.text
    })

    expect(label).toBe('There is no game yet!')
})
