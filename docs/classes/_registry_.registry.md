**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;Registry&quot;](../modules/_registry_.md) › [Registry](_registry_.registry.md)

# Class: Registry

Registry are designed to easily manipulate data in
preparation to integrate with any multi dimensional
data store.

## Hierarchy

* **Registry**

## Index

### Constructors

* [constructor](_registry_.registry.md#constructor)

### Properties

* [data](_registry_.registry.md#protected-data)

### Methods

* [get](_registry_.registry.md#get)
* [has](_registry_.registry.md#has)
* [makeArray](_registry_.registry.md#private-makearray)
* [makeObject](_registry_.registry.md#private-makeobject)
* [remove](_registry_.registry.md#remove)
* [set](_registry_.registry.md#set)
* [shouldBeAnArray](_registry_.registry.md#private-shouldbeanarray)
* [walk](_registry_.registry.md#private-walk)

## Constructors

###  constructor

\+ **new Registry**(`data`: [AnyObject](../interfaces/_registry_.anyobject.md)‹any›): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:10](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L10)*

Sets the initial data

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | [AnyObject](../interfaces/_registry_.anyobject.md)‹any› |  {} |

**Returns:** *[Registry](_registry_.registry.md)*

## Properties

### `Protected` data

• **data**: *[AnyObject](../interfaces/_registry_.anyobject.md)‹any›*

*Defined in [Registry.ts:10](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L10)*

## Methods

###  get

▸ **get**(...`path`: [Index](../modules/_registry_.md#index)[]): *any*

*Defined in [Registry.ts:24](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L24)*

Retrieves the data stored specified by the path

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...path` | [Index](../modules/_registry_.md#index)[] | argument separated  |

**Returns:** *any*

___

###  has

▸ **has**(...`path`: [Index](../modules/_registry_.md#index)[]): *boolean*

*Defined in [Registry.ts:48](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L48)*

Returns true if the specified path exists

**Parameters:**

Name | Type |
------ | ------ |
`...path` | [Index](../modules/_registry_.md#index)[] |

**Returns:** *boolean*

___

### `Private` makeArray

▸ **makeArray**(`hash`: [AnyObject](../interfaces/_registry_.anyobject.md)‹any›): *Array‹any›*

*Defined in [Registry.ts:135](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L135)*

Transforms an object into an arra

**Parameters:**

Name | Type |
------ | ------ |
`hash` | [AnyObject](../interfaces/_registry_.anyobject.md)‹any› |

**Returns:** *Array‹any›*

___

### `Private` makeObject

▸ **makeObject**(`array`: Array‹any›): *object*

*Defined in [Registry.ts:154](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L154)*

Transforms an object into an arra

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | Array‹any› | The array to transform  |

**Returns:** *object*

___

###  remove

▸ **remove**(...`path`: [Index](../modules/_registry_.md#index)[]): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:80](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L80)*

Removes the data from a specified path

**Parameters:**

Name | Type |
------ | ------ |
`...path` | [Index](../modules/_registry_.md#index)[] |

**Returns:** *[Registry](_registry_.registry.md)*

___

###  set

▸ **set**(...`path`: any[]): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:109](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L109)*

Sets the data of a specified path

**Parameters:**

Name | Type |
------ | ------ |
`...path` | any[] |

**Returns:** *[Registry](_registry_.registry.md)*

___

### `Private` shouldBeAnArray

▸ **shouldBeAnArray**(`hash`: [AnyObject](../interfaces/_registry_.anyobject.md)‹any›): *boolean*

*Defined in [Registry.ts:163](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L163)*

Returns true if object keys is all numbers

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | [AnyObject](../interfaces/_registry_.anyobject.md)‹any› | the object to test  |

**Returns:** *boolean*

___

### `Private` walk

▸ **walk**(`data`: [AnyObject](../interfaces/_registry_.anyobject.md)‹any›, `path`: null | string | number[], `value`: any): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:188](https://github.com/Openovate/jsm/blob/214a343/src/Registry.ts#L188)*

Walks the data, look to the end and setting the value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [AnyObject](../interfaces/_registry_.anyobject.md)‹any› | The current data pointer |
`path` | null &#124; string &#124; number[] | The path to the object to set |
`value` | any | The value of the last path to set  |

**Returns:** *[Registry](_registry_.registry.md)*