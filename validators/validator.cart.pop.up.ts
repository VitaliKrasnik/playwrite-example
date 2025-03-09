import { PageContainer } from '../page-objects/page.container';
import { BasePageValidator } from './base/base.page.validator';
import { CartPopUpComponent } from '../page-objects/components/cart.pop.up.component';
 
/**
 * The purpose of this class is to have a verifications to be wrapped by functions 
 * so on the test cases level code look cleaner
 */
export class CartPopUpValidator extends BasePageValidator {
  
  readonly pages: PageContainer;
  readonly cartPopUp: CartPopUpComponent;
  
  constructor(pageContainer: PageContainer) {
    super(pageContainer.page);
    this.pages = pageContainer;
    this.cartPopUp = pageContainer.homePage.cartPopUp;
  }

    async validateProduct(productTitle: string, productDescription: string, productPrice: string) {
        await this.verifyLabel(this.cartPopUp.locators().itemTitle, productTitle, "Product title doesn't match");
        await this.verifyLabel(this.cartPopUp.locators().itemDescription, productDescription, "Product description doesn't match");
        
        await this.verifyLabelContains(this.cartPopUp.locators().itemPrice, productPrice, "Product price doesn't match");
    }
   

    async verifyNumberOfItemsInTheBag(arg0: number) {
        throw new Error('Method not implemented.');
    }

}