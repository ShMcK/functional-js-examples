import test from 'ava';

const first = a => a[0];

test(t => {
	t.is(first([1, 2, 3]), 1);
});

// Array.prototype

Array.prototype.first = function() {
	return this[0];
}

test(t => {
	t.is([1, 2, 3].first(), 1);
});

export default first;
