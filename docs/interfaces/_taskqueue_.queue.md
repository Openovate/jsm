**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;TaskQueue&quot;](../modules/_taskqueue_.md) › [Queue](_taskqueue_.queue.md)

# Interface: Queue

Abstraction defining what a queue is

## Hierarchy

* **Queue**

## Implemented by

* [TaskQueue](../classes/_taskqueue_.taskqueue.md)

## Index

### Properties

* [queue](_taskqueue_.queue.md#queue)

### Methods

* [add](_taskqueue_.queue.md#add)
* [push](_taskqueue_.queue.md#push)
* [run](_taskqueue_.queue.md#run)
* [shift](_taskqueue_.queue.md#shift)

## Properties

###  queue

• **queue**: *[Task](_taskqueue_.task.md)[]*

*Defined in [TaskQueue.ts:194](https://github.com/Openovate/jsm/blob/214a343/src/TaskQueue.ts#L194)*

The list of tasks to be performed

## Methods

###  add

▸ **add**(`callback`: Function, `priority`: number): *[Queue](_taskqueue_.queue.md)*

*Defined in [TaskQueue.ts:202](https://github.com/Openovate/jsm/blob/214a343/src/TaskQueue.ts#L202)*

Adds a task to the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function | the task callback |
`priority` | number | a number to determine the execution importance  |

**Returns:** *[Queue](_taskqueue_.queue.md)*

___

###  push

▸ **push**(`callback`: Function): *[Queue](_taskqueue_.queue.md)*

*Defined in [TaskQueue.ts:209](https://github.com/Openovate/jsm/blob/214a343/src/TaskQueue.ts#L209)*

Adds a task to the bottom of the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function | the task callback  |

**Returns:** *[Queue](_taskqueue_.queue.md)*

___

###  run

▸ **run**(...`args`: any[]): *Promise‹number›*

*Defined in [TaskQueue.ts:224](https://github.com/Openovate/jsm/blob/214a343/src/TaskQueue.ts#L224)*

Runs the tasks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] | any set of arguments to be passed to each task |

**Returns:** *Promise‹number›*

The eventual status of the task run

___

###  shift

▸ **shift**(`callback`: Function): *[Queue](_taskqueue_.queue.md)*

*Defined in [TaskQueue.ts:216](https://github.com/Openovate/jsm/blob/214a343/src/TaskQueue.ts#L216)*

Adds a task to the top of the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function | the task callback  |

**Returns:** *[Queue](_taskqueue_.queue.md)*