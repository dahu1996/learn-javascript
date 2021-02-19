const responsive = (obj) => {
    return new Proxy(obj, {
        get(...args) {
            const result = Reflect.get(...args);
            if (typeof result === 'object' && result !== null) {
                return responsive(result);
            }
            return result;
        },
        set(...args) {
            return Reflect.set(...args)
        },
        isExtensible(...args) {
            console.log('extensible')
            return Reflect.isExtensible(...args);
        }
    });
}

const revocableResponsive = (obj) => {
  return Proxy.revocable(obj, {
    get(...args) {
      const result = Reflect.get(...args);
      if (typeof result === "object" && result !== null) {
        return revocableResponsive(result);
      }
      return result;
    },
    set(...args) {
      return Reflect.set(...args);
    },
  });
};

const obj = {
    foo: {
        bar: 'baz',
        mnt: 'mnt'
    }
};

// 不可撤销代理
const proxyObj1 = responsive(obj);

// 可撤销代理
const { proxy: proxyObj2, revoke: revokeProxyObj } = revocableResponsive(obj);
console.log(proxyObj2);

// Reflect.defineProperty(proxyObj1, 'foo', {
//     configurable: false,
//     enumerable: true,
//     writable: false,
//     value: { bar: 'baz' }
// })
// Object.freeze(obj);
Object.freeze(proxyObj1);
console.log(Reflect.getOwnPropertyDescriptor(obj, 'foo'));
console.log(Reflect.set(proxyObj1, 'foo', 'bar'));

obj.key = 'key';
// console.log()
console.log(Reflect.ownKeys(proxyObj1))
// 是否可拓展
console.log(Reflect.isExtensible(proxyObj1));
console.log(Reflect.isExtensible(obj));

const arr = [1, 2, 3]
const responsiveArr = responsive(arr);