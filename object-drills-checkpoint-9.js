'use strict';
//https://courses.thinkful.com/ei-js-v1/checkpoint/9

let loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water / this.flour * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());