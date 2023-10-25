import { Page } from '@playwright/test'

export async function to(page: Page, url: string) {
    console.log(`Navigating to ${url}`)
    await page.goto(url)
}

export async function reload(page: Page) {
    console.log('Reloading page')
    await page.reload()
}

export async function getNewPage(browser: any) {
    console.log('Opening new page')
    const context = await browser.newContext()
    return await context.newPage()
}