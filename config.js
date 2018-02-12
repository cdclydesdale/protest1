exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4200/wd/hub',
  specs: ['./PageObjectRepo/homeSpec.js'],
  params: {
	  url:"https://www.etsy.com/"
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
}
