# Cypress Test Automation Project

This project contains automated tests using Cypress for testing web applications across different devices and screen resolutions.

## Project Overview

This test automation suite focuses on responsive design testing across various devices and screen resolutions, including:
- Mobile devices (iPhone X, iPhone 15, Samsung Galaxy S22, Google Pixel 5)
- Tablets (iPad, iPad Mini)
- Desktop resolutions (1280x720, 1920x1080, 2560x1440)
- Special devices (Surface Duo)

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
cypres-automation-cicero/
├── cypress/
│   └── e2e/
│       └── visores.cy.js    # Responsive design tests
├── cypress.config.js        # Cypress configuration
├── package.json             # Project dependencies and scripts
└── README.md               # Project documentation
```

## Running Tests

To run the Cypress tests, you can use the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner where you can:
- Run tests in interactive mode
- View test results
- Debug test failures

## Test Coverage

The test suite includes responsive design tests for:
- Navigation visibility across different devices
- Screen resolution compatibility
- Cross-device compatibility

## Dependencies

- Cypress v13.15.0

## Author

- Ignacio Tejera

## License

This project is licensed under the ISC License. 