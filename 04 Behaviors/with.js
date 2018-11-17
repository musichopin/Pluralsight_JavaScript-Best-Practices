'use strict';

var obj = {
  a: {
    b: {
      c: 'hello'
    }
  }
}

var c = 'this is important';

var x = obj.a.b.c;
console.log(x)

with(obj.a.b) {
	console.log(c); // gives error
}

console.log(c);

