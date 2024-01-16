import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';
const email = process.env.EMAIL ?? '';
const password = process.env.PASSWORD ?? '';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps.
  await page.goto('https://console.jumpcloud.com/login/admin');

//Login
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await page.getByRole('button', { name: 'Administrator Login' }).click();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://console.jumpcloud.com/#/home');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.getByRole('heading', { name: 'Welcome, Jason!' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});