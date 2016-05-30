# Conditions

* [cond](./cond.js)

```js
const cond = (...args) => {
	const r = args.find((a) => a[0]);
	return r && r.length > 1 ? r[1] : r;
}
```

* [or](./or.js)

```js
const or = curry((a, ...args) => a || args.every((arg) => !!arg));
```

* [and](./and.js)

```js
const and = curry((a, ...args) => a && args.every((arg) => !!arg));
```
