import test from 'ava';
import curry from '../composition/curry';

// Returns true if one or both of its arguments are true. Returns false if both arguments are false.
const or = curry((a, ...args) => a || args.every((arg) => !!arg));

test(t => {
	t.is(or(true, true), true);
	t.is(or(true, false), true);
	t.is(or(false, false), false);
});

test(t => {
	t.is(or(true, true, true, true), true);
	t.is(or(true, true, true, false), true);
	t.is(or(false, false, false, false), false);
});

// Boolean.prototype

Boolean.prototype.or = function(...args) {
	return this || args.every(arg => !!arg);
}

test(t => {
	t.is(true.or(false), true);
	t.is(false.or(false), false);
});

test(t => {
	t.is(true.or(true, true, false), true);
	t.is(false.or(false, false, false), false);
});

export default or;
