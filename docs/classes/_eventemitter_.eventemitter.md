**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;EventEmitter&quot;](../modules/_eventemitter_.md) › [EventEmitter](_eventemitter_.eventemitter.md)

# Class: EventEmitter

Allows the ability to listen to events made known by another
piece of functionality. Events are items that transpire based
on an action. With events you can add extra functionality
right after the event has triggered.

## Hierarchy

* **EventEmitter**

## Implements

* [Emitter](../interfaces/_eventemitter_.emitter.md)

## Index

### Properties

* [listeners](_eventemitter_.eventemitter.md#listeners)
* [regexp](_eventemitter_.eventemitter.md#regexp)
* [STATUS_INCOMPLETE](_eventemitter_.eventemitter.md#static-status_incomplete)
* [STATUS_NOT_FOUND](_eventemitter_.eventemitter.md#static-status_not_found)
* [STATUS_OK](_eventemitter_.eventemitter.md#static-status_ok)

### Methods

* [emit](_eventemitter_.eventemitter.md#emit)
* [match](_eventemitter_.eventemitter.md#match)
* [on](_eventemitter_.eventemitter.md#on)
* [purge](_eventemitter_.eventemitter.md#private-purge)
* [unbind](_eventemitter_.eventemitter.md#unbind)
* [use](_eventemitter_.eventemitter.md#use)

### Object literals

* [event](_eventemitter_.eventemitter.md#event)

## Properties

###  listeners

• **listeners**: *Record‹string, [TaskQueue](_taskqueue_.taskqueue.md)›*

*Implementation of [Emitter](../interfaces/_eventemitter_.emitter.md).[listeners](../interfaces/_eventemitter_.emitter.md#listeners)*

*Defined in [EventEmitter.ts:28](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L28)*

A listener map to task queues

___

###  regexp

• **regexp**: *string[]* =  []

*Defined in [EventEmitter.ts:42](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L42)*

Event regular expression map

___

### `Static` STATUS_INCOMPLETE

▪ **STATUS_INCOMPLETE**: *number* =  TaskQueue.STATUS_INCOMPLETE

*Defined in [EventEmitter.ts:18](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L18)*

Used to report that a listener aborted the emit when ran

___

### `Static` STATUS_NOT_FOUND

▪ **STATUS_NOT_FOUND**: *number* =  TaskQueue.STATUS_EMPTY

*Defined in [EventEmitter.ts:13](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L13)*

Used to report that there are no listeners found when emitted

___

### `Static` STATUS_OK

▪ **STATUS_OK**: *number* =  TaskQueue.STATUS_OK

*Defined in [EventEmitter.ts:23](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L23)*

* Used to report that all listeners were executed

## Methods

###  emit

▸ **emit**(`event`: string, ...`args`: any[]): *Promise‹number›*

*Implementation of [Emitter](../interfaces/_eventemitter_.emitter.md)*

*Defined in [EventEmitter.ts:50](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L50)*

Calls all the callbacks of the given event passing the given arguments

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The name of the arbitrary event to emit |
`...args` | any[] | Any arguments to pass on to each listener mapped  |

**Returns:** *Promise‹number›*

___

###  match

▸ **match**(`event`: string): *Record‹string, [Event](../interfaces/_eventemitter_.event.md)›*

*Defined in [EventEmitter.ts:95](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L95)*

Returns possible event matches

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | string | The name of the arbitrary event to match  |

**Returns:** *Record‹string, [Event](../interfaces/_eventemitter_.event.md)›*

___

###  on

▸ **on**(`event`: string | string[] | RegExp, `callback`: Function, `priority`: number): *[EventEmitter](_eventemitter_.eventemitter.md)*

*Implementation of [Emitter](../interfaces/_eventemitter_.emitter.md)*

*Defined in [EventEmitter.ts:145](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L145)*

Adds a callback to the given event listener

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`event` | string &#124; string[] &#124; RegExp | - | The name of the event to listen to |
`callback` | Function | - | The task to run when event is emitted |
`priority` | number | 0 | The priority order in which call the task  |

**Returns:** *[EventEmitter](_eventemitter_.eventemitter.md)*

___

### `Private` purge

▸ **purge**(`hash`: Record‹string, any›): *object*

*Defined in [EventEmitter.ts:274](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L274)*

Soft removes every key from an object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | Record‹string, any› | the object to be purged  |

**Returns:** *object*

___

###  unbind

▸ **unbind**(`event`: string | null, `callback`: Function | null): *[EventEmitter](_eventemitter_.eventemitter.md)*

*Defined in [EventEmitter.ts:181](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L181)*

Stops listening to an event

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`event` | string &#124; null |  null | The name of the event to stop listening to |
`callback` | Function &#124; null |  null | The task to remove  |

**Returns:** *[EventEmitter](_eventemitter_.eventemitter.md)*

___

###  use

▸ **use**(...`callback`: Function | [EventEmitter](_eventemitter_.eventemitter.md)[]): *[EventEmitter](_eventemitter_.eventemitter.md)*

*Defined in [EventEmitter.ts:225](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L225)*

Shortcut for middleware

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...callback` | Function &#124; [EventEmitter](_eventemitter_.eventemitter.md)[] |   |

**Returns:** *[EventEmitter](_eventemitter_.eventemitter.md)*

## Object literals

###  event

### ▪ **event**: *object*

*Defined in [EventEmitter.ts:33](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L33)*

Static event data analyzer

###  event

• **event**: *string* = "idle"

*Defined in [EventEmitter.ts:34](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L34)*

###  pattern

• **pattern**: *string* = "idle"

*Defined in [EventEmitter.ts:35](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L35)*

###  variables

• **variables**: *never[]* =  []

*Defined in [EventEmitter.ts:36](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L36)*