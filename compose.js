import test from 'ava';

// (f, g) => a => f(g(a))
const compose = (...args) => x => args.reduceRight((result, f) => f(result), x);

// single params

const add2 = x => x + 2;
const multiply5 = x => x * 5;

test('compose with single params', t => {
	const add2Multiply5 = compose(add2, multiply5);
	t.is(add2Multiply5(3), 17);
});

test(t => {
	const multiply5Add2 = compose(multiply5, add2);
	t.is(multiply5Add2(3), 25);
});
