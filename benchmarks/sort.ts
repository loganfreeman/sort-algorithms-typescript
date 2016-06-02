import {bubble, insertion} from '../src/index'
import * as Benchmark from 'benchmark'

let suite = new Benchmark.Suite()

function generateRandomArray(length: number) {
  let a = new Array(length)
  let i = length
  while (i > 0) {
    let n = Math.floor(Math.random() * length)
    a.push(n)
    i--
  }
  return a
}

let arr = generateRandomArray(100)

suite.add('bubble', () => {
  bubble(arr.slice())
})
.add('insertion', () => {
  insertion(arr.slice())
})
.on('complete', () => {
  console.log('completed')
})
.run({ 'async': true })
