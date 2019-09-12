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
* [getDot](_registry_.registry.md#getdot)
* [has](_registry_.registry.md#has)
* [hasDot](_registry_.registry.md#hasdot)
* [makeArray](_registry_.registry.md#private-makearray)
* [makeObject](_registry_.registry.md#private-makeobject)
* [remove](_registry_.registry.md#remove)
* [removeDot](_registry_.registry.md#removedot)
* [set](_registry_.registry.md#set)
* [setDot](_registry_.registry.md#setdot)
* [shouldBeAnArray](_registry_.registry.md#private-shouldbeanarray)
* [walk](_registry_.registry.md#private-walk)

## Constructors

###  constructor

\+ **new Registry**(`data`: object): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:10](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L10)*

Sets the initial data

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | object |  {} |

**Returns:** *[Registry](_registry_.registry.md)*

## Properties

### `Protected` data

• **data**: *object*

*Defined in [Registry.ts:10](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L10)*

## Methods

###  get

▸ **get**(...`path`: string | number[]): *any*

*Defined in [Registry.ts:24](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L24)*

Retrieves the data stored specified by the path

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...path` | string &#124; number[] | argument separated  |

**Returns:** *any*

___

###  getDot

▸ **getDot**(`notation`: string, `separator`: string): *any*

*Defined in [Registry.ts:51](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L51)*

Gets a value given the path in the registry.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`notation` | string | - | Name space string notation |
`separator` | string | "." | - |

**Returns:** *any*

mixed

___

###  has

▸ **has**(...`path`: string | number[]): *boolean*

*Defined in [Registry.ts:61](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L61)*

Returns true if the specified path exists

**Parameters:**

Name | Type |
------ | ------ |
`...path` | string &#124; number[] |

**Returns:** *boolean*

___

###  hasDot

▸ **hasDot**(`notation`: string, `separator`: string): *boolean*

*Defined in [Registry.ts:94](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L94)*

Checks to see if a key is set

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`notation` | string | - | Name space string notation |
`separator` | string | "." | - |

**Returns:** *boolean*

___

### `Private` makeArray

▸ **makeArray**(`hash`: object): *Array‹any›*

*Defined in [Registry.ts:189](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L189)*

Transforms an object into an arra

**Parameters:**

Name | Type |
------ | ------ |
`hash` | object |

**Returns:** *Array‹any›*

___

### `Private` makeObject

▸ **makeObject**(`array`: any[]): *object*

*Defined in [Registry.ts:208](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L208)*

Transforms an object into an arra

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | any[] | The array to transform  |

**Returns:** *object*

___

###  remove

▸ **remove**(...`path`: string | number[]): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:106](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L106)*

Removes the data from a specified path

**Parameters:**

Name | Type |
------ | ------ |
`...path` | string &#124; number[] |

**Returns:** *[Registry](_registry_.registry.md)*

___

###  removeDot

▸ **removeDot**(`notation`: string, `separator`: string): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:135](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L135)*

Removes name space given notation

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`notation` | string | - | Name space string notation |
`separator` | string | "." | - |

**Returns:** *[Registry](_registry_.registry.md)*

___

###  set

▸ **set**(...`path`: any[]): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:148](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L148)*

Sets the data of a specified path

**Parameters:**

Name | Type |
------ | ------ |
`...path` | any[] |

**Returns:** *[Registry](_registry_.registry.md)*

___

###  setDot

▸ **setDot**(`notation`: string, `value`: any, `separator`: string): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:177](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L177)*

Creates the name space given the space
and sets the value to that name space

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`notation` | string | - | Name space string notation |
`value` | any | - | Value to set on this namespace |
`separator` | string | "." | - |

**Returns:** *[Registry](_registry_.registry.md)*

___

### `Private` shouldBeAnArray

▸ **shouldBeAnArray**(`hash`: object): *boolean*

*Defined in [Registry.ts:217](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L217)*

Returns true if object keys is all numbers

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hash` | object | the object to test  |

**Returns:** *boolean*

___

### `Private` walk

▸ **walk**(`data`: object, `path`: any, `value`: any): *[Registry](_registry_.registry.md)*

*Defined in [Registry.ts:242](https://github.com/Openovate/jsm/blob/edb8b6a/src/Registry.ts#L242)*

Walks the data, look to the end and setting the value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | object | The current data pointer |
`path` | any | The path to the object to set |
`value` | any | The value of the last path to set  |

**Returns:** *[Registry](_registry_.registry.md)*