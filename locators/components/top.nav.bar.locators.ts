import { type Locator, type Page } from '@playwright/test';


export class TopNavBarLocators {
    readonly page: Page;
    readonly navBar: Locator;
    readonly navBarIten: Locator;
    readonly cart: Locator;
    readonly cartItemCount: Locator;
    readonly search: Locator;
    readonly myAccount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navBar = page.locator('.header__desktop__upper');
        this.navBarIten = page.locator('.navlink--toplevel>.navtext');
        this.cart = page.locator('[title="Cart"]');
        this.cartItemCount = page.locator('[data-cart-count]');
        this.search = page.locator('[title="Search"]');
        this.myAccount = page.locator('[title="My Account"]');
    }
}