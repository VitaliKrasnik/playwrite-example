import { type Locator, type Page } from '@playwright/test';

export class TopNavBarComponent {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    locators() {
        return {
            cart : this.page.locator('[title="Cart"]'),
            cartItemCount : this.page.locator('[data-cart-count]'),
            search : this.page.locator('[title="Search"]'),
            myAccount : this.page.locator('[title="My Account"]')
        }
    }
    async clickCartIcon() {
        await this.locators().cart.click()
    }

    async getNumberOfItemsInTheCart(): Promise<string> {
        const text = await this.locators().cartItemCount.nth(1).textContent(); 
        return text ?? '';
    }

}