import test from 'ava';
import and from '../conditions/and';
import isArray from './isArray';

const isObject = a => and(
	a !== null,
	typeof a === 'object', !isArray(a)
);

test(t => {
	t.is(isObject({
		a: 1
	}), true);
	t.is(isObject([1, 2]), false);
});

export default isObject;
