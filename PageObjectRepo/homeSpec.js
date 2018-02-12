var helper = require('../helper.js');
var homePage = require('./homepage.js');

var homePage = new homePage();

describe('it should open Etsy WebSite', function(){

beforeEach(function(){
  browser.get(browser.params.url);
});

it('should load the home page successfully',function(){
  expect(browser.getTitle()).toBe(homePage.title);
});

afterEach(function(){
  browser.manage().deleteAllCookies();
})

});
