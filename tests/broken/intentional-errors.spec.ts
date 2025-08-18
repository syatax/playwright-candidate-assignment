import { test, expect } from '@playwright/test';
import { DemoPage } from '../../page-objects/demo-page';

/**
 * Test Suite - Debug and Fix Issues
 * 
 * This file contains several common testing errors.
 * Your task is to identify and fix all issues to make the tests pass.
 */

test.describe('Playwright Documentation Tests', () => {
  
  test('Homepage verification', async ({ page }) => {
    page.goto('https://playwright.dev');
    
    await page.click('#non-existent-button');
    
    await page.type('text=Get started', 'some text');
    
    const title = page.title();
    
    expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
    
    await page.waitForSelector('text=Get started', { timeout: 5000 };
    
    const welcomeText = await page.locator('h1').innerHTML();
    expect(welcomeText).toContain('Playwright');
  });

  test('Navigation verification', async ({ page }) => {
    const demoPage = new DemoPage(page);
    
    demoPage.navigateToDemo();
    
    expect(await demoPage.getTitle()).toBe('Wrong Title');
    
    expect(demoPage.isGetStartedButtonVisible()).toBe(true);
  });

  test('API integration', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts', {
      data: { title: 'New Post', body: 'Content', userId: 1 }
    });

    expect(response.status()).toBe(201);
    
    const responseBody = response.json();
    
    expect(responseBody.title).toBe('New Post');
    
    const headers = response.headers();
    expect(headers['content-type'].toContain('application/json');
  });
});

test('Standalone test', async ({ page }) => {
  await page.goto(baseUrl);
  
  const element = await page.locator('h1');
  await expect(element.isVisible()).toBe(true);
});