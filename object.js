let foo = {
    get bar1() {
        return this._bar1;
    },
    set bar1(val) {
        console.log("---set---");
        return this._bar1 = val;
    }
};

Object.defineProperty(foo, "bar", {
    get() {
        return this._bar;
    },
    set(val) {
        return this._bar = val;
    }
});
foo.bar = 1000;
let bar = {};
bar = Object.assign(bar, foo);
bar.bar1 = 20;
foo.bar1 = 20;
console.log(bar, bar.bar);

if ('revoke' in )