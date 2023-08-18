import { defineConfig } from '@playwright/test';
import path from 'path';

require('dotenv').config();

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

export default defineConfig({
  testDir: './tests',
  // reporter: [['list'], ['html', { outputFolder: './html-report', open: 'never' }]],
  // reporter: [['list'], ['html', { outputFolder: './html-report', open: 'never' }]],
  reporter: process.env.CI ? 'blob' : 'html',
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /* Run tests in files in parallel */
  fullyParallel: true,
  timeout: 30000,
  use: {
    headless: true,
    baseURL: 'https://en.wikipedia.org',
    // run traces on the first retry of a failed test
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 500,
    },
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true,
    },
  },
  expect: {
    timeout: 10000,
  },
  projects: [
    // this matches all tests ending with .setup.ts
    {
      name: 'setup',
      testMatch: '**/*.setup.ts',
    },
    // this project depends on the setup project and matches all tests ending with loggedin.spec.ts
    {
      name: 'e2e tests logged in',
      testMatch: '**/*loggedin.spec.ts',
      // dependencies: ['setup'],
      // use: {
      //   storageState: STORAGE_STATE,
      // },
    },
    // this project runs all tests except the setup and logged in tests
    {
      name: 'e2e tests',
      testIgnore: ['**/*loggedin.spec.ts', '**/*.setup.ts'],
    },
  ],
});
