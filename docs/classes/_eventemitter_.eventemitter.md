**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;EventEmitter&quot;](../modules/_eventemitter_.md) › [EventEmitter](_eventemitter_.eventemitter.md)

# Class: EventEmitter

Allows the ability to listen to events made known by another
piece of functionality. Events are items that transpire based
on an action. With events you can add extra functionality
right after the event has triggered.

## Hierarchy

* **EventEmitter**

## Index

### Properties

* [QueueInterface](_eventemitter_.eventemitter.md#queueinterface)
* [listeners](_eventemitter_.eventemitter.md#listeners)
* [regexp](_eventemitter_.eventemitter.md#regexp)
* [QueueInterface](_eventemitter_.eventemitter.md#static-queueinterface)
* [STATUS_INCOMPLETE](_eventemitter_.eventemitter.md#static-status_incomplete)
* [STATUS_NOT_FOUND](_eventemitter_.eventemitter.md#static-status_not_found)
* [STATUS_OK](_eventemitter_.eventemitter.md#static-status_ok)

### Methods

* [emit](_eventemitter_.eventemitter.md#emit)
* [match](_eventemitter_.eventemitter.md#match)
* [on](_eventemitter_.eventemitter.md#on)
* [unbind](_eventemitter_.eventemitter.md#unbind)

### Object literals

* [event](_eventemitter_.eventemitter.md#event)

## Properties

###  QueueInterface

• **QueueInterface**: *object* =  EventEmitter.QueueInterface

*Defined in [EventEmitter.ts:54](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L54)*

Used to inject another queue class that implements the Queue interface

#### Type declaration:

* **new __type**(): *[TaskQueue](_taskqueue_.taskqueue.md)*

___

###  listeners

• **listeners**: *Record‹string, [TaskQueue](_taskqueue_.taskqueue.md)›*

*Defined in [EventEmitter.ts:35](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L35)*

An listener map to task queues

___

###  regexp

• **regexp**: *string[]* =  []

*Defined in [EventEmitter.ts:49](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L49)*

Event regular expression map

___

### `Static` QueueInterface

▪ **QueueInterface**: *object* =  TaskQueue

*Defined in [EventEmitter.ts:30](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L30)*

Used to inject another queue class that implements the Queue interface

#### Type declaration:

* **new __type**(): *[TaskQueue](_taskqueue_.taskqueue.md)*

___

### `Static` STATUS_INCOMPLETE

▪ **STATUS_INCOMPLETE**: *number* =  TaskQueue.STATUS_INCOMPLETE

*Defined in [EventEmitter.ts:20](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L20)*

Used to report that a listener aborted the emit when ran

___

### `Static` STATUS_NOT_FOUND

▪ **STATUS_NOT_FOUND**: *number* =  TaskQueue.STATUS_EMPTY

*Defined in [EventEmitter.ts:15](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L15)*

Used to report that there are no listeners found when emitted

___

### `Static` STATUS_OK

▪ **STATUS_OK**: *number* =  TaskQueue.STATUS_OK

*Defined in [EventEmitter.ts:25](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L25)*

* Used to report that all listeners were executed

## Methods

###  emit

▸ **emit**(`event`: string, ...`args`: any[]): *Promise‹number›*

*Defined in [EventEmitter.ts:62](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L62)*

Calls all the callbacks of the given event passing the given arguments

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The name of the arbitrary event to emit |
`...args` | any[] | Any arguments to pass on to each listener mapped  |

**Returns:** *Promise‹number›*

___

###  match

▸ **match**(`event`: string): *Record‹string, [Event](../interfaces/_contracts_event_.event.md)›*

*Defined in [EventEmitter.ts:107](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L107)*

Returns possible event matches

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The name of the arbitrary event to match  |

**Returns:** *Record‹string, [Event](../interfaces/_contracts_event_.event.md)›*

___

###  on

▸ **on**(`event`: string | string[] | RegExp, `callback`: Function, `priority`: number): *[EventEmitter](_eventemitter_.eventemitter.md)*

*Defined in [EventEmitter.ts:157](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L157)*

Adds a callback to the given event listener

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`event` | string &#124; string[] &#124; RegExp | - | The name of the event to listen to |
`callback` | Function | - | The task to run when event is emitted |
`priority` | number | 0 | The priority order in which call the task  |

**Returns:** *[EventEmitter](_eventemitter_.eventemitter.md)*

___

###  unbind

▸ **unbind**(`event`: string | null, `callback`: Function | null): *[EventEmitter](_eventemitter_.eventemitter.md)*

*Defined in [EventEmitter.ts:193](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L193)*

Stops listening to an event

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`event` | string &#124; null |  null | The name of the event to stop listening to |
`callback` | Function &#124; null |  null | The task to remove  |

**Returns:** *[EventEmitter](_eventemitter_.eventemitter.md)*

## Object literals

###  event

### ▪ **event**: *object*

*Defined in [EventEmitter.ts:40](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L40)*

Static event data analyzer

###  event

• **event**: *string* = "idle"

*Defined in [EventEmitter.ts:41](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L41)*

###  pattern

• **pattern**: *string* = "idle"

*Defined in [EventEmitter.ts:42](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L42)*

###  variables

• **variables**: *never[]* =  []

*Defined in [EventEmitter.ts:43](https://github.com/Openovate/jsm/blob/4675aed/src/EventEmitter.ts#L43)*