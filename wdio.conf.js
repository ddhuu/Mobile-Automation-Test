const allure = require("allure-commandline");
exports.config = {
  port: 4723,
  path: "/wd/hub",
  specs: ["./test-scripts/specs/**/*.js"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:appPackage": "com.chisw.TicTacXO",
      "appium:appActivity": "com.example.tic_tac_toe.MainActivity",
      "appium:udid": "LMG820UM44f10748",
      "appium:automationName": "uiautomator2",
      platformName: "Android",
      acceptInsecureCerts: true,
      //maxInstances: 1,
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  reporters: [
    "allure",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  }
};
