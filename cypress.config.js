const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://letcode.in/",
    include: ["./node_modules/cypress", "cypress/**/*.js"],
    experimentalStudio: true
  },
});
