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
* [error](_exception_.exception.md#error)
* [errors](_exception_.exception.md#errors)
* [message](_exception_.exception.md#message)
* [name](_exception_.exception.md#name)
* [stack](_exception_.exception.md#stack)

### Methods

* [for](_exception_.exception.md#static-for)
* [forErrorsFound](_exception_.exception.md#static-forerrorsfound)

## Constructors

###  constructor

\+ **new Exception**(`message`: string, `code`: number): *[Exception](_exception_.exception.md)*

*Defined in [Exception.ts:34](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L34)*

An exception should provide a message and a name

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The exception message |
`code` | number | 500 | The custom exception code  |

**Returns:** *[Exception](_exception_.exception.md)*

## Properties

###  code

• **code**: *number*

*Defined in [Exception.ts:9](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L9)*

The custom exception code

___

###  error

• **error**: *Error*

*Defined in [Exception.ts:14](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L14)*

The original error object

___

###  errors

• **errors**: *object*

*Defined in [Exception.ts:19](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L19)*

A custom list of itemized errors

___

###  message

• **message**: *string*

*Defined in [Exception.ts:24](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L24)*

The exception message

___

###  name

• **name**: *string*

*Defined in [Exception.ts:29](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L29)*

The name of the exception

___

###  stack

• **stack**: *string* = ""

*Defined in [Exception.ts:34](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L34)*

The stack trace that led up to this exception

## Methods

### `Static` for

▸ **for**(`message`: string, ...`values`: any[]): *[Exception](_exception_.exception.md)*

*Defined in [Exception.ts:59](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L59)*

General use expressive reasons

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The exception message template. Uses `%s` to represent values |
`...values` | any[] | The exception message values to bind in order of `%s`  |

**Returns:** *[Exception](_exception_.exception.md)*

___

### `Static` forErrorsFound

▸ **forErrorsFound**(`errors`: object): *[Exception](_exception_.exception.md)*

*Defined in [Exception.ts:72](https://github.com/Openovate/jsm/blob/214a343/src/Exception.ts#L72)*

Expressive error report

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errors` | object | The itemized errors found  |

**Returns:** *[Exception](_exception_.exception.md)*