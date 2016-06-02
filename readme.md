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
```js
