import { EventPromise } from '../src';

interface NumberObject {
  x: number,
  y: number
}

test('basic promise test', async() => {
  const promise = new EventPromise;

  promise.on('formula', ({ x, y }: NumberObject) => {
    return [x + y, x];
  })

  promise.on('formula', ([x, y]: number[]) => {
    return promise.abort(x + y);
  })

  promise.on('formula', ([x, y]: number[]) => {
    return x + y;
  })

  const actual = await promise.emit('formula', {x: 1, y: 2});

  expect(actual).toBe(4);
});

test('promise use', async() => {
  const promise1 = new EventPromise;
  const promise2 = new EventPromise;

  promise1.on('formula', ({ x, y }: NumberObject) => {
    return [x + y, x];
  })

  promise2.on('formula', ([x, y]: number[]) => {
    return promise2.abort(x + y);
  })

  promise1.use(promise2)

  promise1.on('formula', ([x, y]: number[]) => {
    return x + y;
  })

  const actual = await promise1.emit('formula', { x: 1, y: 2 });

  expect(actual).toBe(4);
})
