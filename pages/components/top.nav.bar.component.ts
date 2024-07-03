import { type Locator, type Page } from '@playwright/test';
import { TopNavBarLocators } from '../../locators/components/top.nav.bar.locators.ts';

export class TopNavBarComponent {
    readonly page: Page;
    readonly locators: TopNavBarLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new TopNavBarLocators(page);
    }

    async clickCartIcon() {
        this.locators.cart.click()
    }

    async getNumberOfItemsInTheCart(): Promise<string> {
        const text = await this.locators.cartItemCount.nth(1).textContent(); 
        return text ?? '';
    }

}