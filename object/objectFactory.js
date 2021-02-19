function Person(name) {
	this.name = name;
}

function objectFactory() {
	var args = Array.prototype.slice.call(arguments);
	var Constructor = args[0];
	var params = args.slice(1);
	var obj = Object.create(Constructor.prototype);
	var result = Constructor.apply(obj, params);
	return typeof result === 'object' ? result : obj;
}

var obj = objectFactory(Person, 'lsh');
console.log(obj instanceof Person);
console.log(Object.getPrototypeOf(obj) === Person.prototype);