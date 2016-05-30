import test from 'ava';
import cond from '../conditions/cond';
import and from '../conditions/and';
import or from '../conditions/or';
import isArray from './isArray';
import isString from './isString';
import isObject from './isObject';

const isEmpty = a => cond(
	[
		and(
			or(isString(a), isArray(a)),
			a.length === 0
		), true
	], [
		and(
			isObject(a), Object.keys(a).length === 0
		), true
	], [
		true, false
	]);

export default isEmpty;

test(t => {
	t.is(isEmpty({}), true);
	t.is(isEmpty({
		a: 1
	}), false);
});

test(t => {
	t.is(isEmpty(''), true);
	t.is(isEmpty('something'), false);
});

test(t => {
	t.is(isEmpty([]), true);
	t.is(isEmpty([1, 2]), false);
});
