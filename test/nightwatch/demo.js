module.exports = {
	'demo': function(browser) {
		browser
			.url(browser.launch_url + '01layout.01default.html')
			.end();
	}
}
