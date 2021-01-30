// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
	


  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
 
  capabilities: {
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800x600','--disable-dev-shm-usage','--no-sandbox']
    },
    browserName: "chrome"
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
	onPrepare: function(){
	const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
	jasmine.getEnv().addReporter(new SpecReporter({
		  spec: {
			displayStacktrace: true
		  }
		}));
	}
};
