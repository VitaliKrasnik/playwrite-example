To install the project run command in terminal:
```npm install```

To run tests using VS Code, you will need to install the Playwright extension VS Code marketplace.

## Test Execution
Run all tests:
```bash
npm run all
```

Run tests in development environment:
```bash
npm run all:dev
```

Run tests in headed mode (with browser visible):
```bash
npm run all:headed
```

View test report:
```bash
npm run report
```

## Configuration
The project uses `playwright.config.ts` for configuration settings. Key configurations include:

- **Base URL**: Set in the config file (default: 'https://meowmeowtweet.com/')
- **Browser Support**: Configured to run tests in Chromium by default
- **Environment Variables**: Managed through `.env` files in the `environments` directory
  - Development environment uses `./environments/dev.env`
  - Switch environments using `NODE_ENV` variable

Other notable configurations:
- Parallel test execution enabled
- HTML test reporter
- Trace capture on first retry
- Retry attempts: 2 on CI, 0 locally

## Framework Overview:
1. Page Objects: Page actions are encapsulated within dedicated page objects to promote modularity and maintainability.
  -  Locators method in Pageobjects returns Playwright locators object that can be used within validator so you don't need to remember the locator name when writing the code, autocomplition is your friend.  

2. Page Container and Validator Container: These containers are implemented to minimize frequent page object initialization and ensure availability across all tests.

3. TestBase is the custom fixture that initializes all page objects 

Also a folder services can be added with API clients to improve test procondition. 

Tests are located in tests directory


