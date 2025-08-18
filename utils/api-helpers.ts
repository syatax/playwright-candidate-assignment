import { APIRequestContext, expect } from '@playwright/test';

/**
 * API testing utilities and helper functions
 */
export class ApiHelpers {
  
  /**
   * Base API URL
   */
  static readonly BASE_URL = 'https://jsonplaceholder.typicode.com';

  /**
   * Common headers for API requests
   */
  static getDefaultHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  /**
   * Make GET request
   */
  static async get(request: APIRequestContext, endpoint: string) {
    return await request.get(`${this.BASE_URL}${endpoint}`, {
      headers: this.getDefaultHeaders(),
    });
  }

  /**
   * Make POST request
   */
  static async post(request: APIRequestContext, endpoint: string, data: any) {
    return await request.post(`${this.BASE_URL}${endpoint}`, {
      data: JSON.stringify(data),
      headers: this.getDefaultHeaders(),
    });
  }

  /**
   * Make PUT request
   */
  static async put(request: APIRequestContext, endpoint: string, data: any) {
    return await request.put(`${this.BASE_URL}${endpoint}`, {
      data: JSON.stringify(data),
      headers: this.getDefaultHeaders(),
    });
  }

  /**
   * Make DELETE request
   */
  static async delete(request: APIRequestContext, endpoint: string) {
    return await request.delete(`${this.BASE_URL}${endpoint}`, {
      headers: this.getDefaultHeaders(),
    });
  }

  /**
   * Verify response status code
   */
  static async verifyStatusCode(response: any, expectedStatus: number): Promise<void> {
    // add method here
  }

  /**
   * Verify response time is within acceptable range
   */
  static verifyResponseTime(startTime: number, maxTime: number = 2000): void {
    // add method here
  }
}