exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4200/wd/hub',
  specs: ['./PageObjectRepo/homeSpec.js','./UserRegistration/register.js'],
  params: {
	  url:"https://www.etsy.com/"
  },
  suites:{
    home: './PageObjectRepo/homeSpec.js',
    register: './UserRegistration/register.js'
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
}
