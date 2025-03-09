import { PageContainer } from '../page-objects/page.container';
import { BasePageValidator } from './base/base.page.validator';


/**
 * The purpose of this class is to have a verifications to be wrapped by functions 
 * so on the test cases level code look cleaner
 */
export class CartPageValidator extends BasePageValidator {
   
    readonly pages: PageContainer;

    constructor(pageContainer: PageContainer) {
        super(pageContainer.page);
        this.pages = pageContainer;
    }

    async verifyNumberOfItemsInTheBag(arg0: number) {
        throw new Error('Method not implemented.');
    }

    async validateProduct(productTitle?: string, productDescription?: string, productPrice?: string) {
        throw new Error('Method not implemented.');
    }

}