# Functors

* [F](./functor.js)

```js
const F = (v, f) => f(v);

Number.prototype.F = Object.prototype.F = String.prototype.F = Array.prototype.F = Boolean.prototype.F = function(f) {
	return f(this);
}
```
