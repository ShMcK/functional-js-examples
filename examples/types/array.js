import test from 'ava';

export default function isArray(a) {
	return Array.isArray(a);
}

test(t => {
	t.is(isArray([]), true);
	t.is(isArray({
		a: 1
	}), false);
});
