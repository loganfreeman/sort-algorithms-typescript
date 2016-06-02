# Basis sort array algorithms in TypeScript

Tested with Node.js 5+
### Install
```
npm install
```

### Test
```
npm test
```

### Usage

#### Topological sort
```js
var algorithms = require('sort-algorithms-typescript');

var graph = [
    ['put on your shoes', 'tie your shoes']
    , ['put on your shirt', 'put on your jacket']
    , ['put on your shorts', 'put on your jacket']
    , ['put on your shorts', 'put on your shoes']
]

var sorted = algorithms.toposort(graph)

console.log(sorted)
```
#### Insertion sort
*input array should not contain duplicates*
```js
var arr = [1, 5, 9, 12, -10, 0, 15, 20, 100, 4];

console.log(arr);

console.log(algorithms.insertionsort(arr.slice()));
```
