**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;EventEmitter&quot;](../modules/_eventemitter_.md) › [Emitter](_eventemitter_.emitter.md)

# Interface: Emitter

Abstraction defining what an emitter is

## Hierarchy

* **Emitter**

## Implemented by

* [EventEmitter](../classes/_eventemitter_.eventemitter.md)

## Index

### Properties

* [listeners](_eventemitter_.emitter.md#listeners)

### Methods

* [emit](_eventemitter_.emitter.md#emit)
* [on](_eventemitter_.emitter.md#on)

## Properties

###  listeners

• **listeners**: *Record‹string, [Queue](_taskqueue_.queue.md)›*

*Defined in [EventEmitter.ts:325](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L325)*

A listener map to task queues

## Methods

###  emit

▸ **emit**(`event`: string, ...`args`: any[]): *Promise‹number›*

*Defined in [EventEmitter.ts:333](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L333)*

Calls all the callbacks of the given event passing the given arguments

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The name of the arbitrary event to emit |
`...args` | any[] | Any arguments to pass on to each listener mapped  |

**Returns:** *Promise‹number›*

___

###  on

▸ **on**(`event`: string | string[] | RegExp, `callback`: Function, `priority`: number): *[Emitter](_eventemitter_.emitter.md)*

*Defined in [EventEmitter.ts:342](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L342)*

Adds a callback to the given event listener

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string &#124; string[] &#124; RegExp | The name of the event to listen to |
`callback` | Function | The task to run when event is emitted |
`priority` | number | The priority order in which call the task  |

**Returns:** *[Emitter](_eventemitter_.emitter.md)*