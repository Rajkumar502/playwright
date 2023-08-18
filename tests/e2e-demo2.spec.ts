import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // await page.goto('https://www.google.com/');
});

test('search playwright', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  await page.getByText('playwright', { exact: true }).click();
  await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ... Playwright https://playwright.dev' }).click();

})

test('search cypress', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('cypress');
  await page.getByText('cypress', { exact: true }).click();
  await page.getByRole('link', { name: 'Cypress: JavaScript Component Testing and E2E Testing ... Cypress https://www.cypress.io' }).click();
})
