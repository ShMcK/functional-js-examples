import test from 'ava';
import curry from './curry';

const prop = curry(p => obj => obj[p]);

const obj = {
	a: 1,
	b: 2,
	c: 3
};

const array = [1, 2, 3];

test('object props', t => {
	t.is(prop('a')(obj), 1);
	t.is(prop('b')(obj), 2);
	t.is(prop('c')(obj), 3);
});

test('array props', t => {
	t.is(prop(0)(array), 1);
	t.is(prop(2)(array), 3);
});

Object.prototype.prop = Array.prototype.prop = function(p) {
	return this[p];
}

test(t => {
	t.is(obj.prop('a'), 1);
	t.is(obj.prop('c'), 3);
});

test(t => {
	t.is(array.prop(0), 1);
	t.is(array.prop(2), 3);
});

export default prop;
