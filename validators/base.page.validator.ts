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

    async verifyPlaceholder(inputArea: Locator, text: string): Promise<void> {
        const placeholder = await inputArea.getAttribute('placeholder');
        return this.testText(placeholder as string, text);
    }

    async verifyLabel(elem: Locator, text: string): Promise<void> {
        return this.validate(elem, text, true);
    }
    
      async verifyInput(elem: Locator, text: string): Promise<void> {
        return this.validate(elem, text, false);
    }

    async validate(elem: Locator, text: string, byTextContent: boolean): Promise<void> {
        let text1: string;
    
        if (byTextContent === false) {
          await elem.fill(text);
          text1 = (await elem.inputValue()) || '';
        } else {
          text1 = (await elem.textContent()) || '';
        }
        return this.testText(text1, text);
    }  

}