**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;contracts/Queue&quot;](../modules/_contracts_queue_.md) › [Queue](_contracts_queue_.queue.md)

# Interface: Queue

## Hierarchy

* **Queue**

## Implemented by

* [TaskQueue](../classes/_taskqueue_.taskqueue.md)

## Index

### Properties

* [queue](_contracts_queue_.queue.md#queue)

### Methods

* [add](_contracts_queue_.queue.md#add)
* [push](_contracts_queue_.queue.md#push)
* [run](_contracts_queue_.queue.md#run)
* [shift](_contracts_queue_.queue.md#shift)

## Properties

###  queue

• **queue**: *[Task](_contracts_task_.task.md)[]*

*Defined in [contracts/Queue.ts:7](https://github.com/Openovate/jsm/blob/edb8b6a/src/contracts/Queue.ts#L7)*

The in memory task queue

## Methods

###  add

▸ **add**(`callback`: Function, `priority`: number): *[Queue](_contracts_queue_.queue.md)*

*Defined in [contracts/Queue.ts:17](https://github.com/Openovate/jsm/blob/edb8b6a/src/contracts/Queue.ts#L17)*

Adds a task to the queue

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |
`priority` | number |

**Returns:** *[Queue](_contracts_queue_.queue.md)*

___

###  push

▸ **push**(`callback`: Function): *[Queue](_contracts_queue_.queue.md)*

*Defined in [contracts/Queue.ts:26](https://github.com/Openovate/jsm/blob/edb8b6a/src/contracts/Queue.ts#L26)*

Adds a task to the bottom of the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function |   |

**Returns:** *[Queue](_contracts_queue_.queue.md)*

___

###  run

▸ **run**(...`args`: any[]): *Promise‹number›*

*Defined in [contracts/Queue.ts:44](https://github.com/Openovate/jsm/blob/edb8b6a/src/contracts/Queue.ts#L44)*

Runs the tasks

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *Promise‹number›*

___

###  shift

▸ **shift**(`callback`: Function): *[Queue](_contracts_queue_.queue.md)*

*Defined in [contracts/Queue.ts:35](https://github.com/Openovate/jsm/blob/edb8b6a/src/contracts/Queue.ts#L35)*

Adds a task to the top of the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function |   |

**Returns:** *[Queue](_contracts_queue_.queue.md)*