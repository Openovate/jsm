import Task from './Task';

export default interface Queue {
  /**
   * The in memory task queue
   */
  queue: Task[];

  /**
   * Adds a task to the queue
   *
   * @param {Function} callback
   * @param {Integer} [priority = 0]
   *
   * @return {Queue}
   */
  add(callback: Function, priority: number): Queue;

  /**
   * Adds a task to the bottom of the queue
   *
   * @param {Function} callback
   *
   * @return {Queue}
   */
  push(callback: Function): Queue;

  /**
   * Adds a task to the top of the queue
   *
   * @param {Function} callback
   *
   * @return {Queue}
   */
  shift(callback: Function): Queue;

  /**
   * Runs the tasks
   *
   * @param {*} [...args]
   *
   * @return {Integer}
   */
  run(...args: any[]): Promise<number>;
}
