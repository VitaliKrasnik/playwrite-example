

import { type Page } from '@playwright/test';
import { HomePage } from './home.page';
 

export class PageContainer {
    readonly page: Page;
    readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
    }

}