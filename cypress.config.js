const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://letcode.in/",
    include: ["./node_modules/cypress", "cypress/**/*.js"],
    experimentalStudio: true,
    pageLoadTimeout: 60 * 1000,
    responseTimeout: 30 * 1000,
    requestTimeout: 5 * 1000,
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/reports/mochareports/assets",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    slowTestThreshold: 10 * 1000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    waitForAnimations: true,
    watchForFileChanges: true,
    projectId: "pa38e3",
    scrollBehavior: "center",
    video: false,
    viewportHeight: 768,
    viewportWidth: 1366,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    downloadsFolder: "cypress/downloads",
    env: {},
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
