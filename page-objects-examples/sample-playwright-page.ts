import { type Page, type Locator } from '@playwright/test'
import * as utils from 'common/utils'
import * as actions from 'common/actions'
import * as navigate from 'common/navigate'

export class SamplePlaywrightPage {

    directUrl = 'https://playwright.dev/'
    getStartedButton: Locator
    page: Page

    constructor(page: Page) {
        this.page = page
        this.getStartedButton = page.getByRole('link', { name: 'Get started' })
    }

    async ready() {
        await utils.waitUntilVisible(this.getStartedButton)
        return this
    }

    async goTo() {
        await navigate.to(this.page, this.directUrl)
        return this
    }

    async clickGetStarted() {
        await actions.click(this.getStartedButton)
    }
    
}