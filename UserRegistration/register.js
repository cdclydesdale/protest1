var helper = require('../helper.js');
var pageReg = require('./page.register.js');
var pageReg = new pageReg();

describe('User Registration', function(){

beforeEach(function(){
  browser.get(browser.params.url);
  browser.manage().window().maximize();
});

 it('should register new user successfully',function(){
     helper.waitElementToBeVisisble(pageReg.register);
     pageReg.register.click();
     helper.waitElementToBeVisisble(pageReg.firstName);
     pageReg.firstName.sendKeys('First');
     pageReg.email.sendKeys('test@email.com');
     pageReg.password.sendKeys('password');
     pageReg.passRepeat.sendKeys('password');
 });

 it('should check if Register Button is present',function(){
   helper.waitElementToBeVisisble(pageReg.regButton);
   expect(pageReg.regButton.getText()).toBe('Register');
 });

 afterEach(function(){
   browser.manage().deleteAllCookies();
 });

});
