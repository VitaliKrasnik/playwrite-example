import { type Page } from '@playwright/test';

export class BestSellerComponent {
    private readonly page: Page;
 
    
    constructor(page: Page) {
        this.page = page;
    }

    locators() {
        return {
            productTitle : this.page.locator('.product__grid__title'),
            productDescription : this.page.locator('.product-link').locator('em'),
            productPrice : this.page.locator('.new-price'),
            quickAddButton : this.page.locator('.quick-add-button'),
            selectionOption : this.page.locator('[data-radio-option]'),
            sizeOption : this.page.locator('.radio__button').locator('span:text("Size")'),
        }
    }

    async getProductTitle(itemIndex: number) {
        await this.locators().productTitle.nth(itemIndex).waitFor({state: 'attached'}) 
       await this.locators().productTitle.nth(itemIndex).scrollIntoViewIfNeeded()
       const value = await this.locators().productTitle.nth(itemIndex).textContent()
       if (value) {
        return value.trim();
       }
       throw new Error('Product title not found');
    }

    async getProductDescription(itemIndex: number) {
        const value = await this.locators().productDescription.nth(itemIndex).textContent();
        if (value) {
            return value.trim();
        }
        throw new Error('Product description not found');
    }

    async getProductPrice(itemIndex: number) {
       const rawText = await this.locators().productPrice.nth(itemIndex).textContent();
       const price = rawText?.split("$")[1].split(" ")[0]; 
       if (price) {
        return price;
       }
       throw new Error('Product price not found');
   }

   async addItemToTheCart(prodIndex: number, selectionOption: number, sizeOption: number) {
        await this.locators().productDescription.nth(prodIndex).scrollIntoViewIfNeeded();
        
        await this.locators().quickAddButton.nth(prodIndex).scrollIntoViewIfNeeded();
        await this.locators().quickAddButton.nth(prodIndex).click();
        
        await this.locators().selectionOption.nth(selectionOption).waitFor({state: 'visible'});
        await this.locators().selectionOption.nth(selectionOption).click();

        await this.locators().sizeOption.nth(sizeOption).waitFor({state: 'visible'});
        await this.locators().sizeOption.nth(sizeOption).scrollIntoViewIfNeeded();
        await this.locators().sizeOption.nth(sizeOption).click();
   }

}