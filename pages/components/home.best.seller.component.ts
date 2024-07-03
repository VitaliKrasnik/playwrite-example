import { type Locator, type Page } from '@playwright/test';
import { BestSellerSectionLocators } from '../../locators/home.best.seller.locators.ts';

export class BestSellerComponent {
    private readonly page: Page;
    readonly locators: BestSellerSectionLocators;
    
    constructor(page: Page) {
        this.page = page;
        this.locators = new BestSellerSectionLocators(page);
    }

    async getProductTitle(itemIndex: number) {
       const value = await this.locators.productTitle.nth(itemIndex).textContent()
       return value?.trim();
    }

    async getProductDescription(itemIndex: number) {
        const value = await this.locators.productDescription.nth(itemIndex).textContent();
        return value?.trim();
    }

    async getProductPrice(itemIndex: number) {
       const rawText = await this.locators.productPrice.nth(itemIndex).textContent();
       const price = rawText?.split("$")[1].split(" ")[0]; 
       return price;
   }

   async addItemToTheCart(prodIndex: number, selectionOption: number) {
        await this.locators.productDescription.nth(prodIndex).scrollIntoViewIfNeeded();
        await this.locators.quickAddButton.nth(prodIndex).scrollIntoViewIfNeeded();
        await this.locators.quickAddButton.nth(prodIndex).click();
        await this.locators.selectionOption.nth(selectionOption).scrollIntoViewIfNeeded();
        await this.locators.selectionOption.nth(selectionOption).click();
   }

}