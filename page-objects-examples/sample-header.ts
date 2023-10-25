import { type Page, type Locator } from '@playwright/test'
import * as actions from 'common/actions'
import * as utils from 'common/utils'

export class SampleHeader {
    private homeLink: Locator
    private docsLink: Locator
    private apiLink: Locator
    private nodeJsButton: Locator
    private pythonSubMenuItem: Locator

    constructor(page: Page) {
        this.homeLink = page.getByRole('link', { name: 'Playwright logo Playwright' })
        this.docsLink = page.getByRole('link', { name: 'Docs' })
        this.apiLink = page.getByRole('link', { name: 'API' })
        this.nodeJsButton = page.getByRole('button', { name: 'Node.js' })
        this.pythonSubMenuItem = page.getByRole('link', { name: 'Python' })
    }

    async ready() {
        await utils.waitUntilVisible(this.homeLink)
        return this
    }

    get home(): Locator {
        return this.homeLink
    }

    async clickHome() {
        await actions.click(this.homeLink)
    }

    async clickDocs() {
        await actions.click(this.docsLink)
    }

    async clickApi() {
        await actions.click(this.apiLink)
    }

    async clickNodeJs() {
        await actions.click(this.nodeJsButton)
    }

    async clickPython() {
        await actions.click(this.pythonSubMenuItem)
    }

    async goToPython() {
        await this.clickNodeJs()
        await this.clickPython()
    }

}