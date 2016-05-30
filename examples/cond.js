import test from 'ava';
import and from './and';
import or from './or';

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

test(t => {
	const total = 42;
	const quality = 5;
	t.is(cond(
		[and(total < 50, quality >= 7), true], [or(total < 45, quality > 3), true]
	), true);
});
