import test from 'ava';

const curry = (f, ...args1) => (...args2) => f(...args1, ...args2);

// two params

const add = (x, y) => x + y;
test('partial apply single param function', t => {
	const add1 = curry(add, 1);
	t.is(add1(1), 2);
});

// multiple params

const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
test('partial apply multiple params function', t => {
	const sumMany = curry(sum, 1, 2, 3);
	t.is(sumMany(4), 10);
});

// Function.prototype.curry

Function.prototype.curry = function(...args1) {
	return (...args2) => this(...args1, ...args2);
}

test('Function.prototype.curry', t => {
	const add1 = add.curry(1);
	t.is(add1(1), 2);
});

test(t => {
	const sumMany = sum.curry(1, 2, 3);
	t.is(sumMany(4), 10);
});
