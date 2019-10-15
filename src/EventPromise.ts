import EventEmitter, { Event } from './EventEmitter';
import TaskQueue, { Task } from './TaskQueue';

/**
 * Allows the ability to listen to events made known by another
 * piece of functionality. Events are items that transpire based
 * on an action. With events you can add extra functionality
 * right after the event has triggered.
 */
export default class EventPromise extends EventEmitter {
  /**
   * Used to report that there are no listeners found when emitted
   */
  public static readonly STATUS_NOT_FOUND: number = EventEmitter.STATUS_NOT_FOUND;

  /**
   * Used to report that a listener aborted the emit when ran
   */
  public static readonly STATUS_INCOMPLETE: number = EventEmitter.STATUS_INCOMPLETE;

  /**
   ** Used to report that all listeners were executed
   */
  public static readonly STATUS_OK: number = EventEmitter.STATUS_OK;

  /**
   * Shortcut to abort
   *
   * @param resolved - The last resolve to send
   */
  abort(resolved: any): PromiseAbort {
    return new PromiseAbort(resolved);
  }

  /**
   * Calls all the callbacks of the given event passing the given arguments
   *
   * @param event - The name of the arbitrary event to emit
   * @param args - Any arguments to pass on to each listener mapped
   */
  public emit(event: string, params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const matches: Record<string, Event> = this.match(event);
      const matchKeys: string[] = Object.keys(matches);

      //if there are no events found
      if (!matchKeys.length) {
        //report a 404
        reject(`No event ${event} found`);
        return;
      }

      const queue = new TaskQueue;

      matchKeys.forEach((key: string) => {
        const match: Event = matches[key];
        const event: string = match.pattern;
        //if no direct observers
        if (typeof this.listeners[event] === 'undefined') {
          return;
        }

        //then loop the observers
        this.listeners[event].queue.forEach((listener: Task) => {
          queue.add((params: object, next: Function) => {
            //set the current, try not to explicitly reassign the meta object
            Object.assign(this._utilityPurge(this.event), match, { params }, listener);
            //blind call to callback
            listener.callback(params, next);
          }, listener.priority);
        });
      });

      //instead of running the task queue,
      //let's pull it out manually
      this.iterate(queue, params, resolve);
    });
  }

  /**
   * Calls all the callbacks of the given event passing the given arguments
   *
   * @param queue - A TaskQueue
   * @param params - Single param to pass to the next task
   * @param resolve - The promise resolve function
   */
  public iterate(
    queue: TaskQueue,
    params: object,
    resolve: Function
  ): EventPromise {
    //if no callbacks left
    if (!queue.length) {
      resolve(params);
      return this;
    }

    //bind next
    // @ts-ignore
    const next: NextEmit = this.next.bind(this, queue, resolve);
    //make a quick emitter
    next.emit = this.emit.bind(this);

    //call the callback
    const task = <Task> queue.queue.shift();
    task.callback(params, next);
    return this;
  }

  /**
   * Calls all the callbacks of the given event passing the given arguments
   *
   * @param queue - A TaskQueue
   * @param resolve - The promise resolve function
   * @param resolved - The resolved value from the callback
   */
  public next(
    queue: TaskQueue,
    resolve: Function,
    resolved: object|PromiseAbort
  ): EventPromise {
    if (resolved instanceof PromiseAbort) {
      this.iterate(new TaskQueue, resolved.resolved, resolve);
      return this;
    }

    this.iterate(queue, resolved, resolve);
    return this;
  }
}

/**
 * Flag to signify that the event callbacks were aborted
 */
export class PromiseAbort {
  /**
   * The value of the last resolution
   */
  public readonly resolved: any;

  /**
   * @param resolved - The last resolve to send
   */
  constructor(resolved: any) {
    this.resolved = resolved;
  }
}

/**
 * Abstract to attach the emit function to a function
 */
export interface NextEmit extends Function {
  /**
   * The emit function
   */
  emit: Function
}
