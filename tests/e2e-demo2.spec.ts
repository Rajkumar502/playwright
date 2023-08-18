import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('playwright doc', async ({ page }) => {
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();

})

test('playwright api', async ({ page }) => {
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('link', { name: 'request', exact: true }).click();
})
