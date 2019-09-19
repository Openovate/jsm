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
export type Scalar = string|number|boolean|null;
export type Index = string|number;
export type Definition = Function|object;
export type EventName = string|string[]|RegExp;
