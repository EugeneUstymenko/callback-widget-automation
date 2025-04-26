# Callback Widget Automation

This repository contains automated tests for the Callback Widget using Playwright with TypeScript.
The tests are designed to verify the functionality of the widget across different browsers.

## Last Run

![Playwright Tests](https://github.com/EugeneUstymenko/callback-widget-automation/workflows/Playwright%20Tests/badge.svg)
Automated tests for https://qa1.intaker.xyz/home/widget/qa1/demo.html using Playwright.

## Features

- **Page Object Model**: Structured test architecture for better maintainability
- **TypeScript Integration**: Type-safe code with TypeScript
- **Multi-browser Testing**: Tests run on Chromium, Firefox, and WebKit
- **GitHub Actions**: Automated test execution through GitHub Actions
- **ESLint & Prettier**: Code quality and formatting tools
- **Type Checking**: Static type checking with TypeScript

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EugeneUstymenko/callback-widget-automation.git
   cd callback-widget-automation
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

## Running Tests

1. Run all tests in headless mode:

   ```bash
    npm test
   ```

2. Run tests in UI mode:

   ```bash
    npm run test:ui
   ```

3. Run tests in headed mode (with browser visible):

   ```bash
    npm run test:headed
   ```

## Code Quality Tools

This project uses several tools to ensure code quality:

1. Run ESLint to check code style

   ```bash
   npm run eslint
   ```

2. Run TypeScript type checking

   ```bash
   npm run typecheck
   ```

3. Format code with Prettier

   ```bash
   npm run prettier
   ```

## Project Structure

```
callback-widget-automation/
├── .github/                          # GitHub-specific files
│   └── workflows/                    # GitHub Actions workflows
│       └── playwright.yml            # Playwright tests workflow configuration
│
├── constants/                        # Test constants and data
│   └── callUsWidgetConstants.ts      # Constants for the Call Us Widget
│
├── pages/                            # Page Object Models
│   ├── BasePage.ts                   # Base class with common methods
│   └── CallUsWidgetPage.ts           # Specific page object for the widget
│
├── selectors/                        # Element selectors
│   └── callUsWidgetSelectors.ts      # Selectors for the Call Us Widget
│
├── tests/                            # Test files
│   └── callUsWidget.spec.ts          # Tests for Call Us Widget
│
├── .eslintrc.mjs                     # ESLint configuration
├── .gitignore                        # Git ignore file
├── .prettierignore                   # Prettier ignore file
├── .prettierrc                       # Prettier configuration
├── package.json                      # Project dependencies and scripts
├── playwright.config.ts              # Playwright configuration
└── tsconfig.json                     # TypeScript configuration
```

## Test Scenarios

### Call Us Widget Tests

#### Opening and closing a form

- **Scenario 1**: Verify widget can be opened and closed
  - Open the widget and verify it's visible
  - Verify all form elements are present
  - Close the widget and verify it's no longer visible

#### Step-by-step testing of button activity and field behavior

- **Scenario 2**: Verify submit button state changes based on form completion
  - Open the widget and verify submit button is disabled initially
  - Fill first name and verify button remains disabled
  - Fill last name and verify button remains disabled
  - Fill phone number and verify button becomes enabled
  - Change country code and verify button state updates accordingly

#### Checking the link in the footer

- **Scenario 3**: Verify footer link properties
  - Open the widget and verify footer link is visible
  - Verify link href points to the correct URL
  - Verify link opens in a new tab

#### Form submission and success message

- **Scenario 4**: Verify complete form submission flow
  - Open the widget and fill the form with valid data
  - Submit the form and verify success message appears
  - Verify phone number is displayed correctly in the success message
  - Close the widget and verify it's no longer visible

## CI/CD Integration

This project includes GitHub Actions workflow for manual test execution.

### GitHub Actions Features:

- Manual test execution via GitHub Actions interface
- Test results visible in GitHub Actions logs

### Running Tests in GitHub:

1. Go to the "Actions" tab in the repository
2. Select "Playwright Tests" workflow from the left sidebar
3. Click "Run workflow" dropdown on the right
4. Choose the browser you want to run tests on (all, chromium, firefox, or webkit)
5. Click "Run workflow" to start the tests

See `.github/workflows/playwright.yml` for configuration details.

## Resources & Acknowledgments

### Used Technologies

- [Playwright](https://playwright.dev/) for the excellent testing framework
- [TypeScript](https://www.typescriptlang.org/) for type safety

### Documentation

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
