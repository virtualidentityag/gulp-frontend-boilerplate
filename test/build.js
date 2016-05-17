var config = require('../gulp/config.js');
var chai = require('chai');
var expect = chai.expect;

// use chai filesystem helper
chai.use(require('chai-fs'));

describe('Path', function() {
	it('dist exists', function () {
		expect(config.global.dist).to.be.a.directory();
	});
});
