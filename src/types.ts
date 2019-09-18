//-----------------------------------//
// Describe Generic Interfaces
export interface AnyObject<T> {
  [key: string]: T;
}

export interface Event {
  event: string;
  pattern: string;
  variables: string[];
  args?: any[];
  callback?: Function;
  priority?: number;
}

export interface Task {
  callback: Function;
  priority: number;
}

export interface Queue {
  queue: Task[];
  add(callback: Function, priority: number): Queue;
  push(callback: Function): Queue;
  shift(callback: Function): Queue;
  run(...args: any[]): Promise<number>;
}

export interface Emitter {
  listeners: Record<string, Queue>;
  emit(event: string, ...args: any[]): Promise<number>;
  on(event: string|string[]|RegExp, callback: Function, priority: number): Emitter
}

//-----------------------------------//
// Describe Class Interfaces
export interface EventEmitter extends Emitter {
  listeners: Record<string, TaskQueue>;
  event: Event;
  regexp: string[];
  QueueInterface: {
    new (): TaskQueue;
  };

  emit(event: string, ...args: any[]): Promise<number>;
  match(event: string): Record<string, Event>;
  on(event: EventName, callback: Function, priority?: number): EventEmitter;
  unbind(event?: string | null, callback?: Function | null): EventEmitter;
}

export interface Exception {
  code: number;
  error: Error;
  errors: object;
  message: string;
  name: string;
  stack: string;
}

export interface Reflection {
  getArgumentNames(): string[];
  getDescriptors(): AnyObject<PropertyDescriptor>;
  getMethods(): AnyObject<Function>;
  getPrototypeOf(): object;
}

export interface Registry {
  get(...path: Index[]): any;
  getDot(notation: string, separator?: string): any;
  has(...path: Index[]): boolean;
  hasDot(notation: string, separator?: string): boolean;
  remove(...path: Index[]): Registry;
  removeDot(notation: string, separator?: string): Registry;
  set(...path: any[]): Registry;
  setDot(notation: string, value: any, separator?: string): Registry;
}

export interface TaskQueue extends Queue {
  length: number;
  purge(callback?: Function): TaskQueue;
  unbind(callback: Function): TaskQueue;
}

//-----------------------------------//
// Describe Types
export type Scalar = string|number|boolean|null;
export type Index = string|number;
export type Errors = string|Error|Exception;
export type Definition = Function|object;
export type EventName = string|string[]|RegExp;
