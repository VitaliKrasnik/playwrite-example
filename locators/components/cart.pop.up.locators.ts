import { type Locator, type Page } from '@playwright/test';


export class CartPopUpLocators {
    readonly page: Page;
    readonly itemTitle: Locator;
    readonly itemDescription: Locator;
    readonly itemPrice: Locator;
    readonly totalPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemTitle = page.locator('.cart-item__title>a');
        this.itemDescription = page.locator('.cart-item__selected-options>span');
        this.itemPrice = page.locator('.cart__price');
        this.totalPrice = page.locator('.cart__total__money'); 
    }
}