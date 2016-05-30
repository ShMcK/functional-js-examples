import test from 'ava';

const cond = (...args) => args.reduce((t, a) => {
	if (a[0]) {
		return a[1];
	}
}, null);

test(t => {
	t.is(cond([true, 42]), 42);
});

test(t => {
	t.is(cond([false, 42], [true, 12]), 12);
});

test(t => {
	t.is(cond([false, 42]), undefined);
});
