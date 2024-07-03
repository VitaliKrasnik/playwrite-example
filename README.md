To install the project run command in terminal:
```npm install```

To run the test use: 
```npm run all:headed```

Tests are located in src/addToBagTest

Framework Overview:
1. Page Objects: Page actions are encapsulated within dedicated page objects to promote modularity and maintainability.
2. Element Locators: A separate class for element locators is employed to streamline code maintenance, particularly for pages with a large number of elements.
3. Validator Abstraction: A validator abstraction is utilized to encapsulate assertions, enhancing code clarity at the test level.

4. Page Container and Validator Container: These containers are implemented to minimize frequent page object initialization and ensure availability across all tests.

5. TestBase is the custom fixture that initializes all page objects 

Notes: I wrote this framework example to demonstrate my coding style.
