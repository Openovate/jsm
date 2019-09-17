**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;Reflection&quot;](../modules/_reflection_.md) › [Reflection](_reflection_.reflection.md)

# Class: Reflection

## Hierarchy

* **Reflection**

## Index

### Constructors

* [constructor](_reflection_.reflection.md#constructor)

### Properties

* [definition](_reflection_.reflection.md#protected-definition)
* [nativeMethods](_reflection_.reflection.md#private-nativemethods)

### Methods

* [getArgumentNames](_reflection_.reflection.md#getargumentnames)
* [getDescriptors](_reflection_.reflection.md#getdescriptors)
* [getMethods](_reflection_.reflection.md#getmethods)
* [getPrototypeOf](_reflection_.reflection.md#getprototypeof)

## Constructors

###  constructor

\+ **new Reflection**(`definition`: Function | object): *[Reflection](_reflection_.reflection.md)*

*Defined in [Reflection.ts:31](https://github.com/Openovate/jsm/blob/4675aed/src/Reflection.ts#L31)*

Sets the definition

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | Function &#124; object |   |

**Returns:** *[Reflection](_reflection_.reflection.md)*

## Properties

### `Protected` definition

• **definition**: *Function | object*

*Defined in [Reflection.ts:13](https://github.com/Openovate/jsm/blob/4675aed/src/Reflection.ts#L13)*

The definition which could be a function or an object

___

### `Private` nativeMethods

• **nativeMethods**: *string[]* =  [
    'constructor',
    '__proto__',
    '__defineGetter__',
    '__defineSetter__',
    'hasOwnProperty',
    '__lookupGetter__',
    '__lookupSetter__',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString'
  ]

*Defined in [Reflection.ts:18](https://github.com/Openovate/jsm/blob/4675aed/src/Reflection.ts#L18)*

Native methods we should not return

## Methods

###  getArgumentNames

▸ **getArgumentNames**(): *string[]*

*Defined in [Reflection.ts:45](https://github.com/Openovate/jsm/blob/4675aed/src/Reflection.ts#L45)*

Returns the argument clause of a function

**Returns:** *string[]*

___

###  getDescriptors

▸ **getDescriptors**(): *[AnyObject](../interfaces/_reflection_.anyobject.md)*

*Defined in [Reflection.ts:75](https://github.com/Openovate/jsm/blob/4675aed/src/Reflection.ts#L75)*

Returns where the descriptors are defined

**Returns:** *[AnyObject](../interfaces/_reflection_.anyobject.md)*

___

###  getMethods

▸ **getMethods**(): *[KeyFunctions](../interfaces/_reflection_.keyfunctions.md)*

*Defined in [Reflection.ts:82](https://github.com/Openovate/jsm/blob/4675aed/src/Reflection.ts#L82)*

Returns where the methods are defined

**Returns:** *[KeyFunctions](../interfaces/_reflection_.keyfunctions.md)*

___

###  getPrototypeOf

▸ **getPrototypeOf**(): *object*

*Defined in [Reflection.ts:128](https://github.com/Openovate/jsm/blob/4675aed/src/Reflection.ts#L128)*

Returns the actual prototype location

**Returns:** *object*