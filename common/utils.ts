import { type Locator } from '@playwright/test'




export async function waitUntilVisible(locator: Locator, { timeout = 3000 } = {}) {
    console.log(`Waiting for ${locator} to appear`)
    await locator.waitFor({ state: 'visible', timeout: timeout })
}

export async function waitUntil(locator: Locator, { timeout = 3000 } = {}) {
    console.log(`Waiting for ${locator} to appear`)
    await locator.waitFor({ state: 'attached', timeout: timeout })
}