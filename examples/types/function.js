import test from 'ava';

export default function isFunction(a) {
	return typeof a === 'function';
}

test(t => {
	t.is(isFunction(function() {}), true);
	t.is(isFunction({
		a: 1
	}), false);
});
