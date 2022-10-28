const pkg = require('./package');

let now = Date.now();


exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack, Testing Bot and LambdaTest (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    //
    // If you run your tests on Sauce Labs you can specify the region you want to run your tests
    // in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
    // These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
    // If you don't provide the region it will default for the `us`
    region: 'us',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 3,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [
        {
          "browserName": 'MicrosoftEdge',
          "browserVersion": 'latest',
          "platformName": 'Windows 10',
          'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'chrome',
            browserVersion: '75',
            platformName: 'Windows 10',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.15',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'firefox',
            browserVersion: '55',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'Windows 10',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'macOS 10.15',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'safari',
            browserVersion: '11',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'safari',
            browserVersion: '12',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'safari',
            browserVersion: '13',
            platformName: 'Mac 10.15',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'safari',
            browserVersion: '14',
            platformName: 'Mac 11.00',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'safari',
            browserVersion: 'latest',
            platformName: 'macOS 10.15',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'internet explorer',
            browserVersion: '10',
            platformName: 'Windows 2012',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'internet explorer',
            browserVersion: '11',
            platformName: 'Windows 10',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '13',
            platformName: 'Windows 10',
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '14',
            platformName: 'Windows 10',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '15',
            platformName: 'Windows 10',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '16',
            platformName: 'Windows 10',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '17',
            platformName: 'Windows 10',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '18',
            platformName: 'Windows 10',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '79',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '80',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '81',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '84',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '85',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '86',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: '87',
            platformName: 'Mac 10.13',
            'sauce:options': {build: `${now}`, },
        },
        {
            browserName: 'MicrosoftEdge',
            browserVersion: 'latest',
            platformName: 'macOS 10.15',
            'sauce:options': {build: `${now}`, },
        },
        {
            'browserName':'Safari',
            'appium:deviceName':'iPhone XS Simulator',
            'appium:platformVersion':'14.0',
            'platformName':'iOS',
            'sauce:options': {
                build: `${now}`,
                appiumVersion: '1.19.1'
            },
        },
        {
            'browserName':'Safari',
            'appium:deviceName':'iPhone XS Simulator',
            'appium:platformVersion':'12.0',
            'platformName':'iOS',
            'sauce:options': {
                build: `${now}`,
                appiumVersion: '1.9.1'
            },
        },
        {
            browserName: 'browser',
            'appium:platformVersion': '5.1',
            'appium:deviceName': 'Android Emulator',
            platformName: 'Android',
            'sauce:options': {
                build: `${now}`,
                appiumVersion: '1.18.1'
            },
        },
        {
            browserName: 'Chrome',
            'appium:platformVersion': '8.0',
            'appium:deviceName': 'Android Emulator',
            platformName: 'Android',
            'sauce:options': {
                build: `${now}`,
                appiumVersion: '1.18.1'
            },
        },
        {
            browserName: 'Chrome',
            'appium:platformVersion': '11.0',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            platformName: 'Android',
            'sauce:options': {
                build: `${now}`,
                appiumVersion: '1.18.1'
            },
        },
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'https://borracciablu.github.io/dh-classlist/test/',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['sauce'],

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: ['spec'],



    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
