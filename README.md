# JavaScript Functional Programming

## Setup

`> npm i`

## Content


* [curry & partial application](./examples/partial-apply.js)

`const curry = (f, ...args1) => (...args2) => f(...args1, ...args2);`

* [compose](./examples/compose.js)

`const compose = (...args) => x => args.reduceRight((result, f) => f(result), x);`
