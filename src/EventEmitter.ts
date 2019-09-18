import { Event, Task, Emitter } from './types';
import TaskQueue from './TaskQueue';

/**
 * Allows the ability to listen to events made known by another
 * piece of functionality. Events are items that transpire based
 * on an action. With events you can add extra functionality
 * right after the event has triggered.
 */
export default class EventEmitter implements Emitter {
  /**
   * Used to report that there are no listeners found when emitted
   */
  public static readonly STATUS_NOT_FOUND: number = TaskQueue.STATUS_EMPTY;

  /**
   * Used to report that a listener aborted the emit when ran
   */
  public static readonly STATUS_INCOMPLETE: number = TaskQueue.STATUS_INCOMPLETE;

  /**
   ** Used to report that all listeners were executed
   */
  public static readonly STATUS_OK: number = TaskQueue.STATUS_OK;

  /**
   * Used to inject another queue class that implements the Queue interface
   */
  public static QueueInterface: { new(): TaskQueue } = TaskQueue;

  /**
   * An listener map to task queues
   */
  public readonly listeners: Record<string, TaskQueue> = {};

  /**
   * Static event data analyzer
   */
  public event: Event = {
    event: 'idle',
    pattern: 'idle',
    variables: []
  };

  /**
   * Event regular expression map
   */
  public regexp: string[] = [];

  /**
   * Used to inject another queue class that implements the Queue interface
   */
  public QueueInterface: { new(): TaskQueue } = EventEmitter.QueueInterface;

  /**
   * Calls all the callbacks of the given event passing the given arguments
   *
   * @param event - The name of the arbitrary event to emit
   * @param args - Any arguments to pass on to each listener mapped
   */
  public async emit(event: string, ...args: any[]): Promise<number> {
    const matches: Record<string, Event> = this.match(event);
    const matchKeys: string[] = Object.keys(matches);

    //if there are no events found
    if (!matchKeys.length) {
      //report a 404
      return EventEmitter.STATUS_NOT_FOUND;
    }

    const queue = new this.QueueInterface;

    matchKeys.forEach((key: string) => {
      const match: Event = matches[key];
      const event: string = match.pattern;
      //if no direct observers
      if (typeof this.listeners[event] === 'undefined') {
        return;
      }

      //add args on to match
      match.args = args;

      //then loop the observers
      this.listeners[event].queue.forEach((listener: Task) => {
        queue.add(async(...args: any[]) => {
          //set the current, try not to explicitly reassign the meta object
          Object.assign(purge(this.event), match, listener);
          //if this is the same event, call the method, if the method returns false
          if (await listener.callback(...args) === false) {
            return false;
          }
        }, listener.priority);
      });
    });

    //call the callbacks
    return await queue.run(...args);
  }

  /**
   * Returns possible event matches
   *
   * @param event - The name of the arbitrary event to match
   */
  public match(event: string): Record<string, Event> {
    const matches: Record<string, Event> = {};

    //do the obvious match
    if (typeof this.listeners[event] !== 'undefined') {
      matches[event] = {
        event: event,
        pattern: event,
        variables: []
      };
    }

    this.regexp.forEach((pattern: string) => {
      const regexp: RegExp = new RegExp(
        // pattern,
        pattern.substr(
          pattern.indexOf('/') + 1,
          pattern.lastIndexOf('/') - 1
        ),
        // flag
        pattern.substr(
          pattern.lastIndexOf('/') + 1
        )
      );

      //match can be null or an array or object...
      const match: any = event.match(regexp);
      if (!match || !match.length) {
        return;
      }

      let variables: string[] = [];
      if (Array.isArray(match)) {
        variables = match.slice();
        variables.shift();
      }

      matches[pattern] = { event, pattern, variables };
    });

    return matches;
  }

  /**
   * Adds a callback to the given event listener
   *
   * @param event - The name of the event to listen to
   * @param callback - The task to run when event is emitted
   * @param priority - The priority order in which call the task
   */
  public on(event: string|string[]|RegExp, callback: Function, priority: number = 0): EventEmitter {
    //deal with multiple events
    if (Array.isArray(event)) {
      event.forEach((event: string) => {
        this.on(event, callback, priority);
      });

      return this;
    }

    //if it is a regexp object
    if (event instanceof RegExp) {
      //make it into a string
      event = event.toString()
    }

    //is it a regexp string?
    if(event.indexOf('/') === 0 && event.lastIndexOf('/') !== 0) {
      this.regexp.push(event);
    }

    //add the event to the listeners
    if (typeof this.listeners[event] === 'undefined') {
      this.listeners[event] = new this.QueueInterface;
    }

    this.listeners[event].add(callback, priority);
    return this;
  }

  /**
   * Stops listening to an event
   *
   * @param event - The name of the event to stop listening to
   * @param callback - The task to remove
   */
  public unbind(event: string|null = null, callback: Function|null = null): EventEmitter {
    //if there is no event and not callable
    if (!event && !callback) {
        //it means that they want to remove everything
        purge(this.listeners);
        return this;
    }

    //if there are callbacks listening to
    //this and no callback was specified
    if (!callback && this.listeners[event!]) {
        //it means that they want to remove
        //all callbacks listening to this event
        delete this.listeners[event!];
        return this;
    }

    //if there are callbacks listening
    //to this and we have a callback
    if (this.listeners[event!] && typeof callback === 'function') {
      this.listeners[event!].unbind(callback);
      if(!this.listeners[event!].length) {
        delete this.listeners[event!];
      }
    }

    //if no event, but there is a callback
    if (!event && typeof callback === 'function') {
      Object.keys(this.listeners).forEach((event: string) => {
        this.listeners[event!].unbind(callback);
        if(!this.listeners[event!].length) {
          delete this.listeners[event!];
        }
      });
    }

    return this;
  }
}

function purge(hash: { [key: string]: any }): object {
  for (let key in hash) {
    delete hash[key];
  }

  return hash;
}
