import test from 'ava';

const first = a => a[0];

test(t => {
	t.is(first([1, 2, 3]), 1);
});

const last = a => a[a.length - 1];

test(t => {
	t.is(last([1, 2, 3]), 3);
});

// Array.prototype

Array.prototype.first = function() {
	return this[0];
}

test(t => {
	t.is([1, 2, 3].first(), 1);
});

Array.prototype.last = function() {
	return this[this.length - 1];
}

test(t => {
	t.is([1, 2, 3].last(), 3);
});
