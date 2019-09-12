**[@openovate/jsm](../README.md)**

[Globals](../globals.md) › [&quot;Exception&quot;](../modules/_exception_.md) › [Exception](_exception_.exception.md)

# Class: Exception

Exceptions are used to give more information
of an error that has occured

## Hierarchy

* **Exception**

## Index

### Constructors

* [constructor](_exception_.exception.md#constructor)

### Properties

* [code](_exception_.exception.md#code)
* [errors](_exception_.exception.md#errors)
* [message](_exception_.exception.md#message)
* [name](_exception_.exception.md#name)

### Methods

* [for](_exception_.exception.md#static-for)
* [forErrorsFound](_exception_.exception.md#static-forerrorsfound)

## Constructors

###  constructor

\+ **new Exception**(`message`: string, `code`: number): *[Exception](_exception_.exception.md)*

*Defined in [Exception.ts:24](https://github.com/Openovate/jsm/blob/edb8b6a/src/Exception.ts#L24)*

An exception should provide a message and a name

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | - |
`code` | number | 500 |   |

**Returns:** *[Exception](_exception_.exception.md)*

## Properties

###  code

• **code**: *number*

*Defined in [Exception.ts:9](https://github.com/Openovate/jsm/blob/edb8b6a/src/Exception.ts#L9)*

___

###  errors

• **errors**: *object*

*Defined in [Exception.ts:14](https://github.com/Openovate/jsm/blob/edb8b6a/src/Exception.ts#L14)*

___

###  message

• **message**: *string*

*Defined in [Exception.ts:19](https://github.com/Openovate/jsm/blob/edb8b6a/src/Exception.ts#L19)*

___

###  name

• **name**: *string*

*Defined in [Exception.ts:24](https://github.com/Openovate/jsm/blob/edb8b6a/src/Exception.ts#L24)*

## Methods

### `Static` for

▸ **for**(`message`: string, ...`values`: any[]): *[Exception](_exception_.exception.md)*

*Defined in [Exception.ts:46](https://github.com/Openovate/jsm/blob/edb8b6a/src/Exception.ts#L46)*

General use expressive reasons

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | - |
`...values` | any[] |   |

**Returns:** *[Exception](_exception_.exception.md)*

___

### `Static` forErrorsFound

▸ **forErrorsFound**(`errors`: object): *[Exception](_exception_.exception.md)*

*Defined in [Exception.ts:61](https://github.com/Openovate/jsm/blob/edb8b6a/src/Exception.ts#L61)*

Expressive error report

**Parameters:**

Name | Type |
------ | ------ |
`errors` | object |

**Returns:** *[Exception](_exception_.exception.md)*