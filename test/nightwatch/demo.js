module.exports = {
	'demo': function(browser) {
		browser
			.url(browser.launch_url + '01layout.01default.html')
			.getText('h1', function(result){
				this.assert.equal(result.value, 'Default layout structure');
			})
			.end();
	}
}
