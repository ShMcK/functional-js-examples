import test from 'ava';

const isArray = a => Array.isArray(a);

test(t => {
	t.is(isArray([]), true);
	t.is(isArray({
		a: 1
	}), false);
});

export default isArray;
