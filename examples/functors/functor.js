import test from 'ava';

const F = (v, f) => f(v);

function add1(x) {
	return x + 1;
}

test(t => {
	t.is(F(2, add1), 3);
});

Number.prototype.F = Object.prototype.F = String.prototype.F = Array.prototype.F = function(f) {
	return f(this);
}

test(t => {
	t.is((41).F(add1), 42);
});

test(t => {
  function adjustGreeting(x) {
    return (x === 'hi') ? 'hello' : 'hi';
  }
  t.is(('hi').F(adjustGreeting), 'hello');
});

test(t => {
  function incrementA(obj) {
    return Object.assign({}, obj, {a: ++obj.a});
  }
  t.deepEqual(({a: 1}).F(incrementA), {a: 2});
});

test(t => {
	function empty() {
		return [];
	}
	t.deepEqual([1, 2, 3].F(empty), []);
})
