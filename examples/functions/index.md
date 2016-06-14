# Adjustments

* [throttle](./throttle.js)

```js
const throttle = (fn, limit) => {
	let run = true;
	return (...args) => {
		if (run) {
			run = false;
			setTimeout(() => run = true, limit);
			return fn.apply(this, args);
		}
	};
}

Function.prototype.throttle = function(limit) {
	let run = true;
	return (...args) => {
		if (run) {
			run = false;
			setTimeout(() => run = true, limit);
			return this.apply(this, args);
		}
	};
}
```
