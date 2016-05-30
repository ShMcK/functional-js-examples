# Array Methods

* [includes]('./examples/array/includes.js')

```js
const includes = curry(
	(a, ...args) => args.every((arg) => a.indexOf(arg) > -1)
);

// ES2017
Array.prototype.includes = function(...args) {
	return args.every((arg) => this.indexOf(arg) > -1);
}
```

* [pluck]('./examples/array/pluck')

```js
const pluck = curry((p, list) => list.map(prop(p)));

Array.prototype.pluck = function(p) {
	return this.map(prop(p));
}
```

* [first]('./examples/array/first.js')

```js
const first = a => a[0];

Array.prototype.first = function() {
	return this[0];
}
```

* [last]('./examples/array/last.js')

```js
const last = a => a[a.length - 1];

Array.prototype.last = function() {
	return this[this.length - 1];
}
```