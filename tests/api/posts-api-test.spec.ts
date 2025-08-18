import { test, expect } from '@playwright/test';
import { ApiHelpers } from '../../utils/api-helpers';

/**
 * API Test Implementation - Posts Resource
 * 
 * Implement ONE comprehensive test that demonstrates your understanding
 * of REST API testing principles using the JSONPlaceholder API.
 * 
 * Focus on showing your API testing strategy and validation approach.
 */

test.describe('Posts API Test', () => {

  test('Comprehensive posts endpoint validation', async ({ request }) => {
    /**
     * TASK: Implement a comprehensive test for the JSONPlaceholder posts API
     * 
     * Your test should cover:
     * 1. GET /posts - Retrieve and validate posts collection
     * 2. GET /posts/1 - Retrieve and validate single post
     * 3. POST /posts - Create new post and validate response
     * 4. Error scenario - Test invalid post ID (404 handling)
     * 
     * EVALUATION FOCUS:
     * - How do you structure your API test flow?
     * - What validation strategies do you use?
     * - How do you handle different HTTP methods?
     * - What error scenarios do you consider important?
     * 
     * Use the ApiHelpers utility where appropriate.
     * Base URL: https://jsonplaceholder.typicode.com
     */
    
    // Your implementation here
    
  });

});
