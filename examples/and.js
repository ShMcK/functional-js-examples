import test from 'ava';
import curry from './curry';

// Returns true if one or both of its arguments are true. Returns false if both arguments are false.
const and = curry((a, ...args) => a && args.every((arg) => !!arg));

test(t => {
	t.is(and(true, true), true);
	t.is(and(true, false), false);
	t.is(and(false, false), false);
});

test(t => {
	t.is(and(true, true, true, true), true);
	t.is(and(true, true, true, false), false);
	t.is(and(false, false, false, false), false);
});

// Boolean.prototype

Boolean.prototype.and = function(...args) {
	return this && args.every(arg => !!arg);
}

test(t => {
	t.is(true.and(true), true)
	t.is(true.and(false), false);
	t.is(false.and(false), false);
});

test(t => {
	t.is(true.and(true, true, true), true);
	t.is(true.and(true, true, false), false);
	t.is(false.and(false, false, false), false);
});

export default and;
