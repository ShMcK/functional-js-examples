import test from 'ava';
import curry from '../composition/curry';
import prop from '../composition/prop';

const pluck = curry((p, list) => list.map(prop(p)));

const _objects = [{
	a: 1
}, {
	a: 2
}];

test(t => {
	t.deepEqual(pluck('a', _objects), [1, 2]);
});

const _array = [
	[1, 2],
	[3, 4],
	[5, 6]
];

test(t => {
	t.deepEqual(pluck(0, _array), [1, 3, 5]);
});

Array.prototype.pluck = function(p) {
	return this.map(prop(p));
}

test(t => {
	t.deepEqual(_objects.pluck('a'), [1, 2]);
});

test(t => {
	t.deepEqual(_array.pluck(0), [1, 3, 5]);
});

export default pluck;
