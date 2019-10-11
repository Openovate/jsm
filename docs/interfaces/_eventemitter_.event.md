**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;EventEmitter&quot;](../modules/_eventemitter_.md) › [Event](_eventemitter_.event.md)

# Interface: Event

Abstraction defining what an event is

## Hierarchy

* **Event**

## Index

### Properties

* [args](_eventemitter_.event.md#optional-args)
* [callback](_eventemitter_.event.md#optional-callback)
* [event](_eventemitter_.event.md#event)
* [pattern](_eventemitter_.event.md#pattern)
* [priority](_eventemitter_.event.md#optional-priority)
* [variables](_eventemitter_.event.md#variables)

## Properties

### `Optional` args

• **args**? : *any[]*

*Defined in [EventEmitter.ts:305](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L305)*

`args` from the `emit()`

___

### `Optional` callback

• **callback**? : *Function*

*Defined in [EventEmitter.ts:310](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L310)*

The current callback of the event being emitted

___

###  event

• **event**: *string*

*Defined in [EventEmitter.ts:290](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L290)*

The name of the event

___

###  pattern

• **pattern**: *string*

*Defined in [EventEmitter.ts:295](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L295)*

The regexp pattern of the event

___

### `Optional` priority

• **priority**? : *undefined | number*

*Defined in [EventEmitter.ts:315](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L315)*

The priority of the callback that is currently being emitted

___

###  variables

• **variables**: *string[]*

*Defined in [EventEmitter.ts:300](https://github.com/Openovate/jsm/blob/214a343/src/EventEmitter.ts#L300)*

Variables extracted from the pattern