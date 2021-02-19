const obj = {};

// Reflect.defineProperty(obj, 'foo', { value: 'bar' })
Reflect.set(obj, 'foo', 'bar');


function testApply(...args) {
    console.log(args);
    console.log(this);
}
// 重写apply方法
testApply.apply = f => { 
    console.log('====================================');
    console.log(f);
    console.log('====================================');
};
testApply.apply(obj, [1, 2, 3, 4]);

// 以下两种写法一致
Function.prototype.apply.call(testApply, {}, ['testApply']);
Reflect.apply(testApply, obj, [1, 2, 3]);

// console.log(obj)


const ProxyDate = new Proxy(Date, {});
const time = new ProxyDate();
console.log('====================================');
console.log(time.getTime());
console.log('====================================');