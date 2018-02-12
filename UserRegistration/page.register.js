var pageReg = function(){
  this.register = element(by.id('register'));
  this.firstName = element(by.id('first-name'));
  this.email = element(by.id('email'));
  this.password = element(by.id('password'));
  this.passRepeat = element(by.id('password-repeat'));
  this.regButton = element(by.id('register_button'));
}

module.exports = pageReg;
