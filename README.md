# JavaScript Functional Programming

## Setup

`> npm i`

## Content


* [curry & partial application](./examples/partial-apply.js)

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

* [first]('./examples/first-last.js')

```js
const first = a => a[0];

Array.prototype.first = function() {
	return this[0];
}
```

* [last]('./examples/first-last.js')

```js
const last = a => a[a.length - 1];

Array.prototype.last = function() {
	return this[this.length - 1];
}
```

* y-combinator

**Not sure why you would want this in JavaScript, but just for fun.**

```js
const y = (g => f => f(f))(f => g => x => f(f)(x));
```

* [or](./examples/or.js)

```js
const or = curry((a, ...args) => a || args.every((arg) => !!arg));

Boolean.prototype.or = function(...args) {
	return this || args.every(arg => !!arg);
}
```

* [and](./examples/and.js)

```js
const and = curry((a, ...args) => a && args.every((arg) => !!arg));

Boolean.prototype.and = function(...args) {
	return this && args.every(arg => !!arg);
}
```
