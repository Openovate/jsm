**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;TaskQueue&quot;](../modules/_taskqueue_.md) › [TaskQueue](_taskqueue_.taskqueue.md)

# Class: TaskQueue

Allows asynchronous tasks to be executed in a strict,
predictable order. This is especially useful when the
application state is frequently mutated in response
to asynchronous events.

**`remarks`** 
This task queue supports FIFO and FILO processes by
setting priorities in tasks

## Hierarchy

* **TaskQueue**

## Implements

* [Queue](../interfaces/_contracts_queue_.queue.md)

## Index

### Properties

* [lower](_taskqueue_.taskqueue.md#protected-lower)
* [queue](_taskqueue_.taskqueue.md#queue)
* [upper](_taskqueue_.taskqueue.md#protected-upper)
* [STATUS_EMPTY](_taskqueue_.taskqueue.md#static-status_empty)
* [STATUS_INCOMPLETE](_taskqueue_.taskqueue.md#static-status_incomplete)
* [STATUS_OK](_taskqueue_.taskqueue.md#static-status_ok)

### Accessors

* [length](_taskqueue_.taskqueue.md#length)

### Methods

* [add](_taskqueue_.taskqueue.md#add)
* [purge](_taskqueue_.taskqueue.md#purge)
* [push](_taskqueue_.taskqueue.md#push)
* [run](_taskqueue_.taskqueue.md#run)
* [shift](_taskqueue_.taskqueue.md#shift)
* [then](_taskqueue_.taskqueue.md#then)
* [unbind](_taskqueue_.taskqueue.md#unbind)

## Properties

### `Protected` lower

• **lower**: *number* = 0

*Defined in [TaskQueue.ts:46](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L46)*

Used when determining what is the lowest priority
when pushing into the queue

___

###  queue

• **queue**: *[Task](../interfaces/_contracts_task_.task.md)[]* =  []

*Implementation of [Queue](../interfaces/_contracts_queue_.queue.md).[queue](../interfaces/_contracts_queue_.queue.md#queue)*

*Defined in [TaskQueue.ts:40](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L40)*

The in memory task queue

___

### `Protected` upper

• **upper**: *number* = 0

*Defined in [TaskQueue.ts:52](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L52)*

Used when determining what is the lowest priority
when shifting into the queue

___

### `Static` STATUS_EMPTY

▪ **STATUS_EMPTY**: *number* = 404

*Defined in [TaskQueue.ts:18](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L18)*

Used to report that there are no tasks found when ran

___

### `Static` STATUS_INCOMPLETE

▪ **STATUS_INCOMPLETE**: *number* = 308

*Defined in [TaskQueue.ts:23](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L23)*

Used to report that a task aborted when ran

___

### `Static` STATUS_OK

▪ **STATUS_OK**: *number* = 200

*Defined in [TaskQueue.ts:28](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L28)*

Used to report that all tasks were called when ran

## Accessors

###  length

• **get length**(): *number*

*Defined in [TaskQueue.ts:33](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L33)*

The length of the queue

**Returns:** *number*

## Methods

###  add

▸ **add**(`callback`: Function, `priority`: number): *[TaskQueue](_taskqueue_.taskqueue.md)*

*Implementation of [Queue](../interfaces/_contracts_queue_.queue.md)*

*Defined in [TaskQueue.ts:60](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L60)*

Adds a task to the queue

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | the task callback |
`priority` | number | 0 | a number to determine the execution importance  |

**Returns:** *[TaskQueue](_taskqueue_.taskqueue.md)*

___

###  purge

▸ **purge**(`callback?`: Function): *[TaskQueue](_taskqueue_.taskqueue.md)*

*Defined in [TaskQueue.ts:85](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L85)*

Removes all tasks from the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback?` | Function | returns each task into this function  |

**Returns:** *[TaskQueue](_taskqueue_.taskqueue.md)*

___

###  push

▸ **push**(`callback`: Function): *[TaskQueue](_taskqueue_.taskqueue.md)*

*Implementation of [Queue](../interfaces/_contracts_queue_.queue.md)*

*Defined in [TaskQueue.ts:109](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L109)*

Adds a task to the bottom of the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function | the task callback  |

**Returns:** *[TaskQueue](_taskqueue_.taskqueue.md)*

___

###  run

▸ **run**(...`args`: any[]): *Promise‹number›*

*Implementation of [Queue](../interfaces/_contracts_queue_.queue.md)*

*Defined in [TaskQueue.ts:136](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L136)*

Runs the tasks

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *Promise‹number›*

___

###  shift

▸ **shift**(`callback`: Function): *[TaskQueue](_taskqueue_.taskqueue.md)*

*Implementation of [Queue](../interfaces/_contracts_queue_.queue.md)*

*Defined in [TaskQueue.ts:118](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L118)*

Adds a task to the top of the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function | the task callback  |

**Returns:** *[TaskQueue](_taskqueue_.taskqueue.md)*

___

###  then

▸ **then**(`callback`: Function): *[TaskQueue](_taskqueue_.taskqueue.md)*

*Defined in [TaskQueue.ts:127](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L127)*

When calling await, js looks for a then (to emulate a promise)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function | when the task runner is complete this callback is called  |

**Returns:** *[TaskQueue](_taskqueue_.taskqueue.md)*

___

###  unbind

▸ **unbind**(`callback`: Function): *[TaskQueue](_taskqueue_.taskqueue.md)*

*Defined in [TaskQueue.ts:158](https://github.com/Openovate/jsm/blob/edb8b6a/src/TaskQueue.ts#L158)*

Removes a task from the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function | The task to remove  |

**Returns:** *[TaskQueue](_taskqueue_.taskqueue.md)*