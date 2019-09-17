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

await emitter.emit('trigger something', 1)
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

## Reflection Usage

```js
class Foo {
  foo(x, y, z) {
    return x + y + z;
  }
}

const foo = new Foo;
const names = reflect(foo.foo).getArgumentNames(); //--> x, y, z

const descriptors1 = reflect(Foo1).getDescriptors(); //--> {foo: {...}}
const descriptors2 = reflect(foo).getDescriptors(); //--> {foo: {...}}

const methods1 = reflect(Foo1).getMethods(); //--> {foo: function}
const methods2 = reflect(foo).getMethods(); //--> {foo: function}
```

## traits Usage

```js
const { traits } = require('@openovate/jsm')

class Bar {
  bar() {}
}

class Zoo {
  zoo() {}
}

class Foo2 extends traits(Bar, Zoo) {
  foo() {}
}

const foo = new Foo2

foo.foo()
foo.bar()
foo.zoo()
```