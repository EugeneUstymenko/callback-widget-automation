import { Locator, Page } from '@playwright/test';

/**
 * Base page class that provides common methods for all page objects
 * Contains wrapper methods for basic Playwright actions with method chaining support
 */
export class BasePage {
  /**
   * Creates a new BasePage instance
   * @param page - Playwright Page object
   */
  constructor(protected page: Page) {}

  /**
   * Shorthand method to create a locator from a selector
   * @param selector - CSS or XPath selector
   * @returns Playwright Locator object
   */
  $(selector: string): Locator {
    return this.page.locator(selector);
  }

  /**
   * Navigates to the specified URL
   * @param url - The URL to navigate to
   * @returns The current page object for method chaining
   */
  async goto(url: string): Promise<this> {
    await this.page.goto(url);
    return this;
  }

  /**
   * Clicks on an element identified by the selector
   * @param selector - CSS or XPath selector
   * @returns The current page object for method chaining
   */
  async click(selector: string): Promise<this> {
    await this.$(selector).click();
    return this;
  }

  /**
   * Fills an input field with the specified value
   * @param selector - CSS or XPath selector for the input field
   * @param value - Text to enter into the field
   * @returns The current page object for method chaining
   */
  async fill(selector: string, value: string): Promise<this> {
    await this.$(selector).fill(value);
    return this;
  }

  /**
   * Selects an option from a dropdown/select element
   * @param selector - CSS or XPath selector for the select element
   * @param value - Value to select
   * @returns The current page object for method chaining
   */
  async selectOption(selector: string, value: string): Promise<this> {
    await this.$(selector).selectOption(value);
    return this;
  }

  /**
   * Checks if an element is visible on the page
   * @param selector - CSS or XPath selector
   * @returns Promise resolving to boolean indicating visibility
   */
  async isVisible(selector: string): Promise<boolean> {
    return this.$(selector).isVisible();
  }

  /**
   * Checks if an element is enabled based on the absence of a specified CSS class
   * @param selector - CSS or XPath selector of the element
   * @param disabledClass - CSS class that indicates the disabled state of the element
   * @returns Promise that resolves to true if the element is enabled (doesn't contain disabledClass), otherwise false
   */
  async isElementEnabled(selector: string, disabledClass: string): Promise<boolean> {
    const elementClasses = await this.getAttribute(selector, 'class');
    return elementClasses !== null && !elementClasses.includes(disabledClass);
  }

  /**
   * Gets the text content of an element
   * @param selector - CSS or XPath selector
   * @returns Promise resolving to the text content or null if not found
   */
  async getText(selector: string): Promise<string | null> {
    return this.$(selector).textContent();
  }

  /**
   * Gets the value of an attribute on an element
   * @param selector - CSS or XPath selector
   * @param attributeName - Name of the attribute to get
   * @returns Promise resolving to the attribute value or null if not found
   */
  async getAttribute(selector: string, attributeName: string): Promise<string | null> {
    return this.$(selector).getAttribute(attributeName);
  }

  /**
   * Waits for an element to be visible
   * @param selector - CSS or XPath selector
   * @param timeout - Maximum time to wait in milliseconds
   * @returns The current page object for method chaining
   */
  async waitForVisible(selector: string, timeout?: number): Promise<this> {
    await this.$(selector).waitFor({ state: 'visible', timeout });
    return this;
  }

  /**
   * Checks if an element contains the expected text
   * @param selector - CSS or XPath selector of the element
   * @param expectedText - Text that should be contained in the element
   * @param exact - If true, checks for exact match; if false, checks if element contains the text (default: false)
   * @returns Promise that resolves to true if the element contains/matches the expected text, otherwise false
   */
  async hasText(selector: string, expectedText: string, exact = false): Promise<boolean> {
    return this.getText(selector)
      .then(text => !!text && (exact ? text === expectedText : text.includes(expectedText)))
      .catch(() => false);
  }
}
