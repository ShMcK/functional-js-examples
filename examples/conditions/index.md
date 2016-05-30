# Conditions

* [cond]('./examples/conditions/cond')

```js
const cond = (...args) => args.reduce((t, a) => {
	if (a[0]) {
		return a[1];
	}
}, null);
```

* [or](./examples/conditions/or.js)

```js
const or = curry((a, ...args) => a || args.every((arg) => !!arg));
```

* [and](./examples/conditions/and.js)

```js
const and = curry((a, ...args) => a && args.every((arg) => !!arg));
```
