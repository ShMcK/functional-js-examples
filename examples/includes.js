import test from 'ava';
import curry from './partial-apply';

const includes = curry((a, ...args) => args.every((arg) => a.indexOf(arg) > -1));

test('single param includes', t => {
	const array = [1, 2, 3];
	t.is(includes(array, 3), true);
	t.is(includes(array, 4), false);
});

test('multiple param includes', t => {
	const array = [1, 2, 3];
	t.is(includes(array, 3, 2), true);
	t.is(includes(array, 3, 4), false);
});

// Array.prototype

Array.prototype.includes = function(...args) {
	return args.every((arg) => this.indexOf(arg) > -1);
}

test('single param includes', t => {
	const array = [1, 2, 3];
	t.is(array.includes(3), true);
	t.is(array.includes(4), false);
});

test('multiple param includes', t => {
	const array = [1, 2, 3];
	t.is(array.includes(3, 2), true);
	t.is(array.includes(3, 4), false);
});
