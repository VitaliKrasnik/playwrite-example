import { test, expect } from '../test.base';
import { PageContainer } from '../../pages/container.for.pages';
import { ValidatorContainer } from '../../validators/container.for.validators';


test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`)
});


test('Verify best selling product can be added to the bag', async ({ pages, validators }) => {
  const firstProductIndex = 0;
  const productOptionIndex = 0;


  const productTitle = await pages.homePage.bestSellerSection.getProductTitle(firstProductIndex);
  const productDescription = await pages.homePage.bestSellerSection.getProductDescription(firstProductIndex);
  const productPrice = await pages.homePage.bestSellerSection.getProductPrice(firstProductIndex);

  // action
  await pages.homePage.bestSellerSection.addItemToTheCart(firstProductIndex, productOptionIndex);
  // assertions
  await validators.homePageValidator.verifyNumberOfItemsInTheBag(2); 
 
  // action
  await pages.homePage.topNavBar.clickCartIcon();
   // assertions
  await validators.cartPopUpValidator.checkPopUpVisible();
  await validators.cartPopUpValidator.validateProduct(productTitle, productDescription, productPrice);

  // action
  await pages.homePage.cartPopUp.clickCheckoutButton();
   // assertions
  await validators.cartPageValidator.validateProduct(productTitle, productDescription, productPrice);
});