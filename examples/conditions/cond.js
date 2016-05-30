import test from 'ava';
import and from './and';
import or from './or';

const cond = (...args) => {
	const r = args.find((a) => a[0]);
	return r && r.length > 1 ? r[1] : r;
}

export default cond;

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
	t.is(cond([false, 1], [true, 2], [false, 3], [true, 4]), 2);
});

test(t => {
	const total = 42;
	const quality = 5;
	t.is(cond(
		[and(total < 50, quality >= 7), true], [or(total < 45, quality > 3), true]
	), true);
});
