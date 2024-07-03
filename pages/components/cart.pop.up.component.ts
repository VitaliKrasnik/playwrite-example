import { type Locator, type Page } from '@playwright/test';
import { CartPopUpLocators } from '../../locators/components/cart.pop.up.locators';

export class CartPopUpComponent {
    clickCheckoutButton() {
      throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly locators: CartPopUpLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new CartPopUpLocators(page);
    }


}