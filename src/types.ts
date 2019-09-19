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
// Describe Types
export declare type Scalar = string|number|boolean|null;
export declare type Index = string|number;
export declare type Definition = Function|object;
export declare type EventName = string|string[]|RegExp;
