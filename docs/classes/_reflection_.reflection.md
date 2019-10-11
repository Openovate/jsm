**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;Reflection&quot;](../modules/_reflection_.md) › [Reflection](_reflection_.reflection.md)

# Class: Reflection

A runtime static analyzer used to reverse-engineer classes, functions and objects

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
* [isClass](_reflection_.reflection.md#isclass)

## Constructors

###  constructor

\+ **new Reflection**(`definition`: [Definition](../modules/_reflection_.md#definition)): *[Reflection](_reflection_.reflection.md)*

*Defined in [Reflection.ts:26](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L26)*

Sets the definition

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`definition` | [Definition](../modules/_reflection_.md#definition) | The class, function or object to analyze  |

**Returns:** *[Reflection](_reflection_.reflection.md)*

## Properties

### `Protected` definition

• **definition**: *[Definition](../modules/_reflection_.md#definition)*

*Defined in [Reflection.ts:8](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L8)*

The definition which could be a class, function or an object

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

*Defined in [Reflection.ts:13](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L13)*

Native methods we should not return

## Methods

###  getArgumentNames

▸ **getArgumentNames**(): *string[]*

*Defined in [Reflection.ts:53](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L53)*

Returns the argument clause of a function

**Returns:** *string[]*

___

###  getDescriptors

▸ **getDescriptors**(): *Record‹string, PropertyDescriptor›*

*Defined in [Reflection.ts:83](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L83)*

Returns where the descriptors are defined

**Returns:** *Record‹string, PropertyDescriptor›*

___

###  getMethods

▸ **getMethods**(): *Record‹string, Function›*

*Defined in [Reflection.ts:90](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L90)*

Returns where the methods are defined

**Returns:** *Record‹string, Function›*

___

###  getPrototypeOf

▸ **getPrototypeOf**(): *object*

*Defined in [Reflection.ts:136](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L136)*

Returns the actual prototype location

**Returns:** *object*

___

###  isClass

▸ **isClass**(): *boolean*

*Defined in [Reflection.ts:40](https://github.com/Openovate/jsm/blob/214a343/src/Reflection.ts#L40)*

Returns if the definition is a class or not

**Returns:** *boolean*