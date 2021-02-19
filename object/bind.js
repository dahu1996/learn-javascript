// 简版
Function.prototype.bind = function (context) {
  // 缓存原函数引用
  var self = this;
  return function () {
    return self.apply(context, arguments);
  };
};

// 进阶版
Function.prototype.bind = function (context, ...arg1s) {
  const self = this;
  return function (...arg2s) {
    return self.apply(context, [...arg1s, ...arg2s]);
  };
};

// /**
//  * 测试用例
//  */
class Person {
  constructor(name) {
    this.name = name;
    this.bindTest = this.bindTest.bind(this);
  }
  bindTest() {
    console.log(this);
  }
}

const person = new Person("lsh");
const bindTest = person.bindTest;
bindTest();

const person2 = new Person("dahu");
person2.bindTest = person2.bindTest.bind(person2);
person2.bindTest();

const func = function (...args) {
  console.log(this.name, args);
}.bind({ name: "even" }, 1, 2);

func(3, 4);
