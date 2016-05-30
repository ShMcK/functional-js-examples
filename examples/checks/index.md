# Type Checking

* [isArray](./isArray.js)
* [isFunction](./isFunction.js)
* [isObject](./isObject.js)
* [isString](./isString.js)

# Value Checking

* [isEmpty](./isEmpty.js)

```js
const isEmpty = a => cond(
	[and(or(isString(a), isArray(a)), a.length === 0), true],
  [and(isObject(a), Object.keys(a).length === 0), true],
  [true, false]
);
```
