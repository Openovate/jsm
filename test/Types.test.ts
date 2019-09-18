import { EventEmitter as IEventEmitter } from '../types';
import { EventEmitter } from '../src';

test('types test', async() => {
  //this proves that classes dont need to implement interfaces
  //where as IEventEmitter is not related to EventEmitter
  class MockEmitter {
    public events: IEventEmitter;
    public constructor() {
      this.events = new EventEmitter;
    }

    public getEvents(): IEventEmitter {
      return this.events;
    }
  }

  const triggered: number[] = [];

  const emitter = new MockEmitter;
  emitter.getEvents().on('do something', () => {
    triggered.push(1);
  })

  await emitter.getEvents().emit('do something');

  expect(triggered.length).toBe(1);
  expect(triggered[0]).toBe(1);
});
