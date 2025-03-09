import { test as base, expect } from '@playwright/test';
import { PageContainer } from '../page-objects/page.container';
import { ValidatorContainer } from '../validators/validators.container';

type BaseFixtures = {
  pages: PageContainer;
  validators: ValidatorContainer;
};

// Extend the base test with your custom fixtures
export const test = base.extend<BaseFixtures>({
  pages: async ({ page }, use) => {
    const pages = new PageContainer(page);
    await use(pages);
  },
  validators: async ({ pages }, use) => {
    const validators = new ValidatorContainer(pages);
    await use(validators);
  },
});

export { expect };