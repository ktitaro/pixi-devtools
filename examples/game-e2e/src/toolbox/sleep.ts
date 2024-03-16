/**
 * Suspends the execution for the given amount of time.
 * @param delay - The delay represented in milliseconds.
 * @returns A promise that resolves after some delay.
 */
export const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}