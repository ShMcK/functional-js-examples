import test from 'ava';

const isFunction = a => typeof a === 'function';

test(t => {
	t.is(isFunction(function() {}), true);
	t.is(isFunction({
		a: 1
	}), false);
});

export default isFunction;
