var helper = require('./helper.js');
describe('it should open Etsy WebSite', function(){

beforeEach(function(){
  browser.get(browser.params.url);
});

it('should load the home page successfully',function(){
  expect(browser.getTitle()).toBe('Etsy.com | Shop for anything from creative people everywhere');
});

  
});
