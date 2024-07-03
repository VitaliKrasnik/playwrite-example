import { Locator, type Page } from '@playwright/test';
import { BaseValidator } from './base.validator.ts';
/**
 * The Base Validator class is able to perform verificaitons
 */
export class BasePageValidator extends BaseValidator {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page
    }

    async verifyLabel(elem: Locator, expectedText: string, errorMsg: string): Promise<void> {
        return this.validate(elem, expectedText, true, errorMsg);
    }
    
      async verifyInput(elem: Locator, expectedText: string, errorMsg: string): Promise<void> {
        return this.validate(elem, expectedText, false, errorMsg);
    }

    async validate(elem: Locator, expectedText: string, byTextContent: boolean, errorMsg: string): Promise<void> {
        let actualText: string;
    
        if (byTextContent === false) {
          await elem.fill(expectedText);
          actualText = (await elem.inputValue()) || '';
        } else {
          actualText = (await elem.textContent()) || '';
        }
        return this.assertTextEqual(actualText, expectedText, errorMsg);
    }  

}