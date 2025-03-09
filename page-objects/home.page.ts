import { type Locator, type Page } from '@playwright/test';
import { BestSellerComponent } from './components/home.best.seller.component.ts';
import { CartPopUpComponent } from './components/cart.pop.up.component.ts';
import { TopNavBarComponent } from './components/top.nav.bar.component.ts';

export class HomePage {
    private readonly page: Page;
    
   
    readonly topNavBar: TopNavBarComponent;
    readonly bestSellerSection: BestSellerComponent;
    readonly cartPopUp: CartPopUpComponent;
    

    constructor(page: Page) {
        this.page = page;
        this.topNavBar = new TopNavBarComponent(page);
        this.bestSellerSection = new BestSellerComponent(page);
        this.cartPopUp = new CartPopUpComponent(page);
    }



}