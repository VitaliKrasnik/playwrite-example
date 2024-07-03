import { type Page } from '@playwright/test';
import { PageContainer } from '../pages/container.for.pages.ts';
import { HomePageValidator } from './validator.home.page.ts';
import { CartPopUpValidator } from './validator.cart.pop.up.ts';
import { CartPageValidator } from './validator.cart.page.ts';
 

/**
* Container (facade) fol all validators 
**/
export class ValidatorContainer {
    readonly pages: PageContainer;
    readonly homePageValidator: HomePageValidator;
    readonly cartPopUpValidator: CartPopUpValidator;
    readonly cartPageValidator: CartPageValidator;

    constructor(pageContainer: PageContainer) {
        this.pages = pageContainer;
        this.homePageValidator = new HomePageValidator(this.pages);
        this.cartPopUpValidator = new CartPopUpValidator(this.pages);
        this.cartPageValidator = new CartPageValidator(this.pages);
    }
}