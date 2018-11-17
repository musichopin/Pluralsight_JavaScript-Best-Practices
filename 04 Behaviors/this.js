'use strict';
var obj = {
  val: 'Hi there',
  printVal: function(){
    console.log(this);
    console.log(this.val);
  }
};
var obj2 = {
  val: 'Whats up'
};

var print = obj.printVal; /*becomes error with strict mode on*/
print();

var print = obj.printVal.bind(obj2);
print();

obj2.print2 = obj.printVal;
obj2.print2();

/*
similar ex using function constructor:

var Button = function(content) { 
  this.content = content;
};
Button.prototype.click = function() {
  console.log(this.content + ' clicked');
};

var myButton = new Button('OK');
myButton.click();

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the global object

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton


//prints:
//OK clicked
//undefined clicked
//OK clicked
*/