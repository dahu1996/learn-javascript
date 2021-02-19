const isObjectLike = value => typeof value === 'object' && value !== null;
const isObject = value => Object.prototype.toString.call(value) === '[object Object]';
const isArray = value => Array.isArray(value);
const isMap = value => value instanceof Map;
const isSet = value => value instanceof Set;

function deepClone(value) {
    let result = null;
    if (!isObjectLike(value)) {
        // 普通类型，函数等
        return value;
    }
    if (isArray(value)) {
        result = [];
        value.forEach(val => result.push(deepClone(val)))
    } else if (isMap(value)) {
        result = new Map();
        value.forEach((val, key) => result.set(key, deepClone(val)))
    } else if (isSet(value)) {
        result = new Set();
        value.forEach((val) => result.add(deepClone(val)));
    } else if (isObject(value)) {
        result = Object.create({});
        Object.keys(value).forEach(key => result[key] = deepClone(value[key]))
    }
    return result;
}

const arr1 = [{1:1, 2:2, 3:3}, new Set([1, 2, 3, 4]), new Map([[1, 2], [3, 4]])];
const arr2 = deepClone(arr1);
console.log(arr2);