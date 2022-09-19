const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: true,
    baseUrl: "https://letcode.in/",
    include: ["./node_modules/cypress", "cypress/**/*.js"],
    reporter: "spec",
    experimentalStudio: true,
    retries: {
      runMode: 2,
      openMode: 2,
    },
    downloadsFolder: "cypress/downloads",
    env: {
      name: "charles",
      email: "charles.togah@gmail.com",
      pass: "123456",
    },
    pageLoadTimeout: 60 * 1000,
    responseTimeout: 30 * 1000,
    requestTimeout: 5 * 1000,

    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    waitForAnimations: true,
    watchForFileChanges: true,
    projectId: "k2w24e",
    scrollBehavior: "center",
    video: false,
    viewportHeight: 768,
    viewportWidth: 1366,
  },
});
