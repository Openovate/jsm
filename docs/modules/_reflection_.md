**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;Reflection&quot;](_reflection_.md)

# External module: "Reflection"

## Index

### Classes

* [Reflection](../classes/_reflection_.reflection.md)

### Interfaces

* [AnyClass](../interfaces/_reflection_.anyclass.md)

### Type aliases

* [Definition](_reflection_.md#definition)

### Functions

* [reflect](_reflection_.md#reflect)
* [traits](_reflection_.md#traits)

## Type aliases

###  Definition

Ƭ **Definition**: *Function | object*

*Defined in [Reflection.ts:195](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L195)*

Generic definition that the reflection class accepts

## Functions

###  reflect

▸ **reflect**(`definition`: [Definition](_reflection_.md#definition)): *[Reflection](../classes/_reflection_.reflection.md)*

*Defined in [Reflection.ts:152](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L152)*

A lazy implementer of Reflection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [Definition](_reflection_.md#definition) | The class, function or object to analyze  |

**Returns:** *[Reflection](../classes/_reflection_.reflection.md)*

___

###  traits

▸ **traits**(...`definitions`: [Definition](_reflection_.md#definition)[]): *[AnyClass](../interfaces/_reflection_.anyclass.md)*

*Defined in [Reflection.ts:163](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L163)*

Traits are used to inherit multiple classes
Usage: `class Foo extends traits(Bar, Zoo, Boom) {}`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...definitions` | [Definition](_reflection_.md#definition)[] | The classes or objects to extend |

**Returns:** *[AnyClass](../interfaces/_reflection_.anyclass.md)*

An anonymous class with the combined methods