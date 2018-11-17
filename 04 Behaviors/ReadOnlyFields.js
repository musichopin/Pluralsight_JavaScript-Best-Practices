'use strict';
var obj = {};

Object.defineProperty(obj, 'readOnly', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'This var is read only'
});

obj.readOnly = 'I wrote this';
console.log(obj.readOnly);