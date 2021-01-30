describe('angularjs homepage todo list', function() {
	var reporters = require('jasmine-reporters');

	var junitReporter = new reporters.JUnitXmlReporter({
	  savePath: './dist',
	  filePrefix: 'e2e_tests',
	  consolidateAll: true
	});

	jasmine.getEnv().addReporter(junitReporter);
	
  it('should add a todo', function() {
    browser.get('/');
    var text = element(by.css('app-root a')).getText();
    expect(text).toEqual('Aston Villa Dashboard');
  });
});
