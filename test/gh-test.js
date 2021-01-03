const pkg = require('../package.json');
const ghpages = require('gh-pages');

ghpages.publish('test', {
	src: [
		'./index.html',
		'./test-browser.js'
	],
	dest: 'test/v' + pkg.version + '/',
	message: 'Test v' + pkg.version,
});
