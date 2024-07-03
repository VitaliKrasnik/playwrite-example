import { type Page } from '@playwright/test';
import { PageContainer } from '../pages/container.for.pages';
import { BasePageValidator } from './base.page.validator';
 
/**
 * The purpose of this class is to have a verifications to be wrapped by functions 
 * so on the test cases level code look cleaner
 */
export class HomePageValidator extends BasePageValidator {
    readonly pages: PageContainer;

    constructor(pageContainer: PageContainer) {
        super(pageContainer.page);
        this.pages = pageContainer;
    }

    async verifyNumberOfItemsInTheBag(numerOfItemsExpected: number) {
        const numerOfItemsActual = await this.pages.homePage.topNavBar.getNumberOfItemsInTheCart(); 
        this.assertTextEqual(numerOfItemsActual, `${numerOfItemsExpected}`, "Number of items in the cart doesn't match")
    }



}