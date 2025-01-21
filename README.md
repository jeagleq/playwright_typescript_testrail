# 🎯 Playwright+TypeScript+TestRail Testing Project (UI + API)

This project is a comprehensive **Playwright Testing** solution, combining UI and API testing capabilities. The project features a login functionality, state preservation, and integration with TestRail.

---

## ✨ Features

- **User Login and State Preservation**:

  - The user login functionality is implemented to save the state (e.g., cookies, sessions).
  - This state is reused in subsequent tests.
  - The state-saving logic is defined in the `auth-setup.ts` file.
  - The state-saving logic for temporary user is defined in the `datafactory/createAuth.ts` file.

- **Centralized Configuration**:

  - Credentials and base URLs (for both UI and API) are stored in `.env`.
  - These parameters are read using the `config.ts` file.

- **Framework Behavior Customization**:

  - Default command-line options are configured in the `playwright.config.ts` file.

- **Page Object Model**:
  - The `pages` directory contains classes and methods for interacting with various application pages.

---

## 📦 Installation

Use the package manager [npm] to install playwright

```Shell
npm i && npx playwright install
```

## 🚀 Run tests

### Run all tests

```Shell
npx playwright test
```

### Run all tests with ui mode

```Shell
npx playwright test --ui
```

### Run tests with specific tag

```Shell
npx playwright test --grep @sanity
```

---

## 📊 Report Upload to TestRail

### Installing the TestRail CLI

```Shell
pip install trcli
```

---

### To upload results into TestRail execute next command

```bash
sh upload_results.sh
```

---

### If you need to update existing run in TestRail - add on the 10th row in the upload_results.sh file next:

```bash
--run-id "run_id_number_in_TestRail" \
```
