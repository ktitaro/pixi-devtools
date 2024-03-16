import { Page } from '@playwright/test'
import { getWidgetPropByNameAt } from '..'

/**
 * Attempts to test a prop of widget by the given name
 * against the validity using the given test function.
 * Use it when you have multiple widget with the
 * same name and you want to get a specific one.
 * @param page - The playwright browser page.
 * @param name - The name of the widget to test.
 * @param index - The index of the widget to test.
 * @param propKey - The key of the prop to test.
 * @param propTest - The test function to use.
 * @returns - Whether the test was successful.
 */
export async function testWidgetPropByNameAt<K>(
    page: Page,
    name: string,
    index: number,
    propKey: string,
    propTest: (v: K) => boolean
): Promise<boolean> {
    const propVal = await getWidgetPropByNameAt<K>(page, name, index, propKey)
    return propVal !== undefined ? propTest(propVal) : false
}