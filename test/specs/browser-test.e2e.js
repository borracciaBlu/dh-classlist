const pkg = require('../../package.json');
const assert = require('assert');

let baseUrl = "https://borracciablu.github.io/dh-classlist/test/v" + pkg.version + "/index.html";

describe('dh-classlist', () => {
    it('should have no errors', () => {
        browser.url(baseUrl);

        const failures =  browser.$('.failures');
        failures.getText().then(text => assert.equal(text, 'failures: 0'));
    });
});


