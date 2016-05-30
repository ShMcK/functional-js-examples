# JavaScript Functional Programming

Simplified functional programming with ES2015.

## Setup

`> npm i`

## Functions

* [curry & partial application](./examples/curry.js)

```js
const curry = (f, ...args1) => (...args2) => f(...args1, ...args2);

Function.prototype.curry = function(...args1) {
	return (...args2) => this(...args1, ...args2);
}
```

* [compose](./examples/compose.js)

```js
const compose = (...args) => x => args.reduceRight((result, f) => f(result), x);

Function.prototype.compose = function(f) {
	return (...args) => this.call(this, f.apply(this, args));
}
```

* [includes]('./examples/includes.js')

```js
const includes = curry(
	(a, ...args) => args.every((arg) => a.indexOf(arg) > -1)
);

// coming with ES2017 ?
Array.prototype.includes = function(...args) {
	return args.every((arg) => this.indexOf(arg) > -1);
}
```

* [cond]('./examples/cond')

```js
const cond = (...args) => args.reduce((t, a) => {
	if (a[0]) {
		return a[1];
	}
}, null);
```

* [first]('./examples/first.js')

```js
const first = a => a[0];

Array.prototype.first = function() {
	return this[0];
}
```

* [last]('./examples/last.js')

```js
const last = a => a[a.length - 1];

Array.prototype.last = function() {
	return this[this.length - 1];
}
```

* [or](./examples/or.js)

```js
const or = curry((a, ...args) => a || args.every((arg) => !!arg));
```

* [and](./examples/and.js)

```js
const and = curry((a, ...args) => a && args.every((arg) => !!arg));
```

* [prop](./examples/prop.js)

```js
const prop = curry(p => obj => obj[p]);

Object.prototype.prop = Array.prototype.prop = function(p) {
	return this[p];
}
```

* [pluck]('./examples/pluck')

```js
const pluck = curry((p, list) => list.map(prop(p)));

Array.prototype.pluck = function(p) {
	return this.map(prop(p));
}
```

* y-combinator

*Not sure why you would want this in JavaScript, but just for fun.*

```js
const y = (g => f => f(f))(f => g => x => f(f)(x));
```
