let sum = new Function('num1', 'num2', 'return num1+num2');
console.log(sum(20, 30));
console.log(sum.name);

function args(x, y) {
  // 测试
  console.log([x, y], Array.from(arguments))
  x = 10;
  console.log([x, y], Array.from(arguments))
  arguments[1] = 30;
  console.log([x, y], Array.from(arguments))
}

// args(20, 20);
// args(40);


function demoFunc() {
  console.log('demoFunc');
}

var demoFunc = null;

console.log(Object.prototype.toString.apply(demoFunc));
