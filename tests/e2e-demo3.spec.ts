import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('playwright test', async ({ page }) => {
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright Test' }).first().click();
  await page.getByRole('link', { name: 'test.afterAll', exact: true }).click();
})

test('playwright library', async ({ page }) => {
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright Library' }).click();
  await page.getByRole('link', { name: 'FrameLocator' }).click();
})
