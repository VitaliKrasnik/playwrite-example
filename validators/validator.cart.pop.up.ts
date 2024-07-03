import { type Page } from '@playwright/test';
import { PageContainer } from '../pages/container.for.pages';
import { BasePageValidator } from './base.page.validator';
 
/**
 * The purpose of this class is to have a verifications to be wrapped by functions 
 * so on the test cases level code look cleaner
 */
export class CartPopUpValidator extends BasePageValidator {
    validateProduct(productTitle: string | null, productDescription: string | null, productPrice: string | undefined) {
      throw new Error('Method not implemented.');
    }
   
    readonly pages: PageContainer;

    constructor(pageContainer: PageContainer) {
        super(pageContainer.page);
        this.pages = pageContainer;
    }

    async verifyNumberOfItemsInTheBag(arg0: number) {
        throw new Error('Method not implemented.');
    }

    checkPopUpVisible() {
        throw new Error('Method not implemented.');
      }


}