import test from 'ava';

const last = a => a[a.length - 1];

test(t => {
	t.is(last([1, 2, 3]), 3);
});

Array.prototype.last = function() {
	return this[this.length - 1];
}

test(t => {
	t.is([1, 2, 3].last(), 3);
});

export default last;
