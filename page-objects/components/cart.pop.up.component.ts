import { type Page } from '@playwright/test';

export class CartPopUpComponent {
   
    readonly page: Page;
 

    constructor(page: Page) {
        this.page = page;
    }

    locators() {
        return { 
            closeButton : this.page.locator('.cart-dropdown__close'),
            checkoutButton : this.page.locator('.cart__checkout'),
            itemTitle : this.page.locator('.cart-item__title>a'),
            itemDescription : this.page.locator('.cart-item__selected-options>span').nth(0),
            itemSize : this.page.locator('.cart-item__selected-options>span').nth(1),
            itemPrice : this.page.locator('.cart__price'),
            totalPrice : this.page.locator('.cart__total__money') 
        }
    }

    async checkPopUpVisible() {
        await this.locators().checkoutButton.waitFor({state: 'visible'});
    }

    async clickCheckoutButton() {
        await this.locators().checkoutButton.click();
    }

    async closePopUp() {
        await this.locators().closeButton.waitFor({state: 'visible'});
        await this.locators().closeButton.click();
    }

}