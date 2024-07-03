import { type Locator, type Page } from '@playwright/test';


export class BestSellerSectionLocators {
    readonly page: Page;
    readonly productTitle: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly quickAddButton: Locator;
    readonly selectionOption: Locator;

    // Actually it's optional to have locators in a separate class
    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('.product__grid__title');
        this.productDescription = page.locator('.navlink--toplevel>.navtext');
        this.productPrice = page.locator('.new-price');
        this.quickAddButton = page.locator('.quick-add-button');
        this.selectionOption = page.locator('[data-radio-option]');
    }
}

