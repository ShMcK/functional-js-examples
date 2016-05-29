# JavaScript Functional Programming

## Setup

`> npm i`

## Content


* [curry & partial application](./partial-apply.js)

`const curry = (f, ...args1) => (...args2) => f(...args1, ...args2);`

* [compose](./compose.js)

`const compose = (...args) => args.reduceRight((x, f) => f(x));`
