**[@openovate/jsm](README.md)**

[Globals](globals.md)

# @openovate/jsm

# jsm

JavaScript Modules that Work in Node, and Browser

## Install

```bash
$ npm i @openovate/jsm
```

## EventEmitter Usage

```js
const { EventEmitter } = require('@openovate/jsm')

const emitter = new EventEmitter;

emitter.on('trigger something', async x => {
  console.log('something triggered', x + 1)
})

emitter.on(/trigger (something)/, async x => {
  await Helper.sleep(2000)
  console.log('(something) triggered', x + 2)
}, 2)

await emitter.trigger('trigger something', 1)
```

## Exception Usage

```js
const { Exception } = require('@openovate/jsm')

throw Exception.for('Something %s is %s', 'good', 'bad')
```

## Registry Usage

```js
const { Registry } = require('@openovate/jsm')

const registry = Registry.load()

registry.set('foo', 'bar', 'zoo')
registry.set('foo', 'zoo', ['foo', 'bar', 'zoo'])

console.log(registry.has('foo', 'bar'))
console.log(registry.has('bar', 'foo'))
console.log(registry.get('foo', 'zoo', 1))

registry.remove('foo', 'bar')

console.log(registry.has('foo', 'bar'))
console.log(registry.has('foo', 'zoo'))
```

## TaskQueue Usage

```js
const { TaskQueue } = require('@openovate/jsm')

const queue = new TaskQueue;

queue.push(async x => {
  console.log(x + 1)
})

queue.shift(async x => {
  await Helper.sleep(2000)
  console.log(x + 2)
})

queue.add(async x => {
  console.log(x + 3)
}, 10)

await queue.run(1)
```