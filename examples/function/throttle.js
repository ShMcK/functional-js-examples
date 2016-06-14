import test from 'ava';

export default function throttle(fn, limit) {
	let run = true;
	return (...args) => {
		if (run) {
			run = false;
			setTimeout(() => run = true, limit);
			return fn.apply(this, args);
		}
	};
}

// test
let addOne = x => x + 1;
addOne = throttle(addOne, 300);

test('throttled function', t => {
	let a = 0;
	const first = addOne(a);
	const second = addOne(a);
	const third = addOne(a);
	t.is(first, 1);
	t.is(second, undefined);
	t.is(third, undefined);
});

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

function increment(x) {
	return x + 1;
}

test('throttled prototype function', t => {
	let a = 0;
	const first = increment.throttle(200)(a);
	t.is(first, 1);
});
