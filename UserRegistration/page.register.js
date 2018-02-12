var pageReg = function(){
  this.register = element(by.id('register'));
  this.firstName = element(by.id('first-name'));
  this.email = element(by.id('email'));
  this.password = element(by.id('password'));
  this.passRepeat = element(by.id('password-repeat'));
  this.regButton = element(by.id('register_button'));


  //Function to perform User Registration
  this.userRegister = function(){
  this.firstName.sendKeys('First');
  this.email.sendKeys('test@email.com');
  this.password.sendKeys('password');
  this.passRepeat.sendKeys('password');
  }
}
module.exports = pageReg;
