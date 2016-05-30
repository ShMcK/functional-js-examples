# Composition

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

* [prop](./examples/prop.js)

```js
const prop = curry(p => obj => obj[p]);

Object.prototype.prop = Array.prototype.prop = function(p) {
	return this[p];
}
```

* y-combinator

*Not sure why you would want this in JavaScript, but just for fun.*

```js
const y = (g => f => f(f))(f => g => x => f(f)(x));
```
