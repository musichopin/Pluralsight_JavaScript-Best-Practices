var obj = function() {
  var _this = this;

  this.hello = 'hello';
  
  this.greet = function(){
    console.log(_this.hello);
  }
  
  this.delayGreeting = function(){
    setTimeout(this.greet, 1000);
// w/o using _this kw:
// setTimeout(this.greet.bind(this), 1000);  
  }

}

var greeter = new obj();

greeter.delayGreeting()