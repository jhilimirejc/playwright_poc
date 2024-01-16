import { Page } from '@playwright/test';

async function login(
    page: Page,
    email: string,
    password: string,
): Promise<void> {
    await page.goto('https://console.jumpcloud.com/login/admin');

    //Login
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);

    const loginButton = await page.getByRole('button', { name: 'Administrator Login' })
    await Promise.all([
        page.waitForNavigation(),
        loginButton.click()
    ]);
}

export default login;