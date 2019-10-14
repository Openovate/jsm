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
  public async emit(event: string, params: any): Promise<any> {
    const matches: Record<string, Event> = this.match(event);
    const matchKeys: string[] = Object.keys(matches);

    //if there are no events found
    if (!matchKeys.length) {
      //report a 404
      return EventEmitter.STATUS_NOT_FOUND;
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
        queue.add(async() => {
          //set the current, try not to explicitly reassign the meta object
          Object.assign(this._utilityPurge(this.event), match, { params }, listener);
          //call the callback and set the params again
          params = await listener.callback(params);
          //if params is abort
          if (params instanceof PromiseAbort) {
            //dont continue
            return false;
          }
        }, listener.priority);
      });
    });

    //call the callbacks
    const status = await queue.run();

    //if no event found, we want to prevent the
    //parameters being passed off as results
    if (status === EventEmitter.STATUS_NOT_FOUND) {
      return new Error(`Event ${event} not found`);
    }

    //if it's an abort
    if (params instanceof PromiseAbort) {
      //just get the resolved
      params = params.resolved;
    }

    return params;
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
