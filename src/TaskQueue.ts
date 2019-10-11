/**
 * Allows asynchronous tasks to be executed in a strict,
 * predictable order. This is especially useful when the
 * application state is frequently mutated in response
 * to asynchronous events.
 *
 * @remarks
 * This task queue supports FIFO and FILO processes by
 * setting priorities in tasks
 */
export default class TaskQueue implements Queue {
  /**
   * Used to report that there are no tasks found when ran
   */
  public static readonly STATUS_EMPTY: number = 404;

  /**
   * Used to report that a task aborted when ran
   */
  public static readonly STATUS_INCOMPLETE: number = 308;

  /**
   * Used to report that all tasks were called when ran
   */
  public static readonly STATUS_OK: number = 200;

  /**
   * The length of the queue
   */
  public get length(): number {
    return this.queue.length;
  }

  /**
   * The in memory task queue
   */
  public readonly queue: Task[] = [];

  /**
   * Used when determining what is the lowest priority
   * when pushing into the queue
   */
  protected lower: number = 0;

  /**
   * Used when determining what is the lowest priority
   * when shifting into the queue
   */
  protected upper: number = 0;

  /**
   * Adds a task to the queue
   *
   * @param callback - the task callback
   * @param priority - a number to determine the execution importance
   */
  public add(callback: Function, priority: number = 0): TaskQueue {
    if (priority > this.upper) {
      this.upper = priority;
    } else if (priority < this.lower) {
      this.lower = priority;
    }

    const task: Task = { callback, priority };

    //fifo by default
    this.queue.push(task);

    //then sort by priority
    this.queue.sort((a: Task, b: Task): number => {
      return a.priority <= b.priority ? 1: -1;
    });

    return this;
  }

  /**
   * Removes all tasks from the queue
   *
   * @param callback - returns each task into this function
   */
  public purge(callback?: Function): TaskQueue {
    //if no callback
    if (typeof callback !== 'function') {
      //empty
      this.queue.length = 0;
      return this;
    }

    let task: Task;
    while (this.queue.length) {
      task = <Task> this.queue.shift();
      if (typeof callback === 'function') {
        callback(task);
      }
    }

    return this;
  }

  /**
   * Adds a task to the bottom of the queue
   *
   * @param callback - the task callback
   */
  public push(callback: Function): TaskQueue {
    return this.add(callback, this.lower - 1);
  }

  /**
   * Adds a task to the top of the queue
   *
   * @param callback - the task callback
   */
  public shift(callback: Function): TaskQueue {
    return this.add(callback, this.upper + 1);
  }

   /**
   * When calling await, js looks for a then (to emulate a promise)
   *
   * @param callback - when the task runner is complete this callback is called
   */
  public then(callback: Function): TaskQueue {
    //ts is wrong, there is a method called `Promise.then()`
    // @ts-ignore
    this.run().then(callback);
    return this;
  }

  /**
   * Runs the tasks
   *
   * @param args - any set of arguments to be passed to each task
   * @return The eventual status of the task run
   */
  public async run(...args: any[]): Promise<number> {
    if (!this.queue.length) {
      //report a 404
      return TaskQueue.STATUS_EMPTY;
    }

    let task: Task;
    while (this.queue.length) {
      task = <Task> this.queue.shift();
      if (await task.callback(...args) === false) {
        return TaskQueue.STATUS_INCOMPLETE;
      }
    }

    return TaskQueue.STATUS_OK;
  }

  /**
   * Removes a task from the queue
   *
   * @param callback - The task to remove
   */
  public unbind(callback: Function): TaskQueue {
    this.queue.forEach((task: Task, i: number) => {
      if(callback === task.callback) {
        this.queue.splice(i, 1);
      }
    });

    return this;
  }
}

//custom interfaces and types

/**
 * Abstraction defining what a task is
 */
export interface Task {
  /**
   * The task to be performed
   */
  callback: Function;

  /**
   * The priority of the task, when placed in a queue
   */
  priority: number;
}

/**
 * Abstraction defining what a queue is
 */
export interface Queue {
  /**
   * The list of tasks to be performed
   */
  queue: Task[];

  /**
   * Adds a task to the queue
   *
   * @param callback - the task callback
   * @param priority - a number to determine the execution importance
   */
  add(callback: Function, priority: number): Queue;

  /**
   * Adds a task to the bottom of the queue
   *
   * @param callback - the task callback
   */
  push(callback: Function): Queue;

  /**
   * Adds a task to the top of the queue
   *
   * @param callback - the task callback
   */
  shift(callback: Function): Queue;

  /**
   * Runs the tasks
   *
   * @param args - any set of arguments to be passed to each task
   * @return The eventual status of the task run
   */
  run(...args: any[]): Promise<number>;
}
