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
     pageReg.userRegister();
 });

 // it('should check if Register Button is present',function(){
 //   //helper.waitElementToBeVisisble(pageReg.regButton);
 //   pageReg.regButton.click();
 // });

 afterEach(function(){
   browser.manage().deleteAllCookies();
 });

});
