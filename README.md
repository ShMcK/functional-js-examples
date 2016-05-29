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
