'use strict';

const pkg = require('../package');
const assert = require('assert');
const webdriver = require('selenium-webdriver');

let now = Date.now();
let username = process.env.SAUCE_USERNAME;
let accessKey = process.env.SAUCE_ACCESS_KEY;
let baseUrl = "https://borracciablu.github.io/dh-classlist/test/";

function initTest(platformList) {
   platformList.forEach(setTest);
}

function setTest(platform) {
    let driver;

    describe(pkg.name + ' ' + pkg.version + ' ' + platform.platform + ' ' + platform.browserName + ' ' + platform.version, function() {
        this.timeout(120000);

        beforeEach(async function () {
            driver = await new webdriver.Builder().withCapabilities({
                'browserName': platform.browserName,
                'browserVersion': platform.version,
                'platformName': platform.platform,
                'deviceName': platform.deviceName,
                'sauce:options': {
                    'username': username,
                    'accessKey': accessKey,
                    'build': now,
                    "recordVideo": false,
                    "recordScreenshots": false,
                    'name': pkg.name,
                    'maxDuration': 1200,
                    'public': 'public',
                    'passed': 'true',
                }
            }).usingServer("https://ondemand.saucelabs.com/wd/hub").build();

            await driver.getSession().then(function (sessionid) {
                driver.sessionID = sessionid.id_;
            });
        });

        afterEach(async function() {
            await driver.executeScript("sauce:job-result=" + (this.currentTest.state));
            await driver.quit();
        });

        it('should open ' + platform.platform, async function() {
            await driver.get(baseUrl);

            const failures = await driver.findElement(webdriver.By.css('.failures'));
            const text = await failures.getText();
            assert.equal(text, 'failures: 0');
        });
    });
}


let browserList = [
  { browserName: 'chrome', version: '75', platform: 'Windows 10' },
  { browserName: 'chrome', version: 'latest', platform: 'Mac 10.13' },
  { browserName: 'chrome', version: 'latest', platform: 'macOS 10.15' },
  { browserName: 'firefox', version: 'latest', platform: 'Mac 10.13' },
  { browserName: 'firefox', version: 'latest', platform: 'Windows 10' },
  { browserName: 'firefox', version: 'latest', platform: 'macOS 10.15' },
  { browserName: 'safari', version: '11', platform: 'Mac 10.13' },
  { browserName: 'safari', version: '12', platform: 'Mac 10.13' },
  { browserName: 'safari', version: '13', platform: 'Mac 10.15' },
  { browserName: 'safari', version: '14', platform: 'Mac 11.00' },
  { browserName: 'safari', version: 'latest', platform: 'macOS 10.15' },
  { browserName: 'internet explorer', version: '10', platform: 'Windows 2012' },
  { browserName: 'internet explorer', version: '11', platform: 'Windows 10' },
  { browserName: 'MicrosoftEdge', version: '13', platform: 'Windows 10' },
  { browserName: 'MicrosoftEdge', version: '14', platform: 'Windows 10' },
  { browserName: 'MicrosoftEdge', version: '15', platform: 'Windows 10' },
  { browserName: 'MicrosoftEdge', version: '16', platform: 'Windows 10' },
  { browserName: 'MicrosoftEdge', version: '17', platform: 'Windows 10' },
  { browserName: 'MicrosoftEdge', version: '18', platform: 'Windows 10' },
  { browserName: 'MicrosoftEdge', version: '79', platform: 'Mac 10.13' },
  { browserName: 'MicrosoftEdge', version: '80', platform: 'Mac 10.13' },
  { browserName: 'MicrosoftEdge', version: '81', platform: 'Mac 10.13' },
  { browserName: 'MicrosoftEdge', version: '84', platform: 'Mac 10.13' },
  { browserName: 'MicrosoftEdge', version: '85', platform: 'Mac 10.13' },
  { browserName: 'MicrosoftEdge', version: '86', platform: 'Mac 10.13' },
  { browserName: 'MicrosoftEdge', version: '87', platform: 'Mac 10.13' },
  { browserName: 'MicrosoftEdge', version: 'latest', platform: 'macOS 10.15' },
];

initTest(browserList);

// @TODO add tests appium
// { browserName: 'android', version: '5.1', platform: 'Linux', deviceName: 'Android Emulator' },
// { browserName: 'android', version: '11.0', platform: 'Linux', deviceName: 'Google Pixel 3a GoogleAPI Emulator' },
// { browserName: 'iphone', version: '10.3', platform: 'OS X 10.12' },
// { browserName: 'iphone', version: '14.0', platform: 'OS X 10.15' },
// { browserName: 'safari', version: '8', platform: 'OS X 10.10' },
// { browserName: 'safari', version: '9', platform: 'OS X 10.11' },

// { browserName: 'firefox', version: '4.0', platform: 'Mac 10.13' },
// { browserName: 'firefox', version: '4.0', platform: 'Windows 10' },
// { browserName: 'safari', version: '10.1', platform: 'Mac 10.12' },
