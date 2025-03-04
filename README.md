# 🎭 Playwright Portfolio  

![Playwright Logo](https://playwright.dev/img/playwright-logo.svg)  

🚀 **Automating the web with Playwright!** This repository contains my Playwright test automation projects, showcasing my skills in **end-to-end testing**, **cross-browser automation**, and **continuous integration with GitHub Actions**.  

---

## 🔥 **What’s Inside?**  
- ✅ **Playwright Test Scripts** – Automated test cases for various web applications  
- 🏗 **Framework Setup** – Playwright configuration, project structure, and reusable utilities  
- 🔄 **CI/CD Integration** – GitHub Actions workflow for running tests in different browsers  
- 📊 **Test Reports** – Screenshots, videos, and HTML reports for test execution  

---

## 🚀 **Technologies Used**  
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/-Playwright-2D8CFF?style=flat&logo=playwright&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)


## 🏗 **Project Setup**  
💻 Follow these steps to set up and run Playwright tests locally:  

```sh
# Clone this repository
git clone https://github.com/SabarGul/playwrightPortfolio.git

# Navigate to the project folder
cd playwright-portfolio

# Install dependencies
npm install

# Run tests in headed mode
npx playwright test --headed

# Run tests in all browsers
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
