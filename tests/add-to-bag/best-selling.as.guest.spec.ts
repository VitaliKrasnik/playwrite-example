import { test } from '../test.base';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
});

test('Verify best selling product can be added to the cart', async ({pages, validators}) => {
  const productIndex = 0;
  const productOptionIndex = 0;
  const productSizeIndex = 1;

  // Save the product details to be used for assertions
  const productTitle = await pages.homePage.bestSellerSection.getProductTitle(productIndex);
  const productDescription = await pages.homePage.bestSellerSection.getProductDescription(productIndex);
  const productPrice = await pages.homePage.bestSellerSection.getProductPrice(productIndex);

  // action
  await pages.homePage.bestSellerSection.addItemToTheCart(productIndex, productOptionIndex, productSizeIndex);
  await pages.homePage.cartPopUp.checkPopUpVisible();
  await pages.homePage.cartPopUp.closePopUp();
  // assertions
  await validators.homePageValidator.verifyNumberOfItemsInTheBag(1); 
 
  // action
  await pages.homePage.topNavBar.clickCartIcon();
  await pages.homePage.cartPopUp.checkPopUpVisible();
  // assertions
  await validators.cartPopUpValidator.validateProduct(productTitle, productDescription, productPrice);
});