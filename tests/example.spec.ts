import { test, expect } from '@playwright/test';


test('go to applications page', async ({ page }) => {
  page.goto('https://console.jumpcloud.com/#/applications')

  await expect(page.locator('[data-test-id="ApplicationItemListToolbar__addApplicationBtn"]')).toBeVisible();
  await expect(page.locator('[data-test-id="MainHeader__mainHeader"]').getByRole('heading')).toContainText('Applications');
  await page.locator('[data-test-id="ApplicationItemListToolbar__addApplicationBtn"]').click();
  await page.locator('[data-test-id="FeaturedApplications__select__customTemplate"]').click();
  await page.locator('[data-test-id="ApplicationCreationPage__next"]').click();
  await page.getByLabel('Manage Single Sign-On (SSO)').check();
  await page.locator('[data-test-id="ApplicationCreationPage__next"]').click();
  await page.locator('[data-test-id="Input__input"]').click();
  await page.locator('[data-test-id="Input__input"]').fill('Test234567');
  await page.locator('[data-test-id="ApplicationCreationPage__next"]').click();
  await page.locator('[data-test-id="ApplicationCreationPage__next"]').click();

  await page.getByLabel('ACS URL (Default)').locator('[data-test-id="Input__input"]').click();
  await page.getByLabel('ACS URL (Default)').locator('[data-test-id="Input__input"]').fill('https://www.test.com');
  await page.getByRole('button', { name: 'save' }).click();




  // await expect(page.getByLabel('Default URL  *')).toBeVisible();
  // await expect(page.locator('[data-test-id="ApplicationSamlConfiguration__ssoUrlInput"]').getByRole('textbox')).toHaveValue('https://sso.jumpcloud.com/saml2/test234567');
  // await page.getByRole('button', { name: 'save' }).click();
  await page.locator('[data-test-id="InputSearch__input"]').click();
  await page.locator('[data-test-id="InputSearch__input"]').fill('test');
  await expect(page.locator('[data-test-id="ApplicationMainPanel__itemListSection"]').getByRole('list')).toContainText('Test234567');
  

});


test('go to users page', async ({ page }) => {
  page.goto('https://console.jumpcloud.com/#/users')

  await expect(page.locator('[data-test-id="ItemTableActionBar__systemUserFilter"]')).toContainText('11');
  await expect(page.locator('.btnMainAction')).toBeVisible();
});

