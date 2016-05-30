import test from 'ava';

const isString = a => typeof a === 'string';

test(t => {
	t.is(isString('s'), true);
	t.is(isString(1), false);
});

export default isString;
