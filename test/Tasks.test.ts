import { TaskQueue } from '../src';

test('task run test', async () => {
  const queue = new TaskQueue;

  let triggered: number[] = [];

  await queue
    .push(async (x: number) => {
      triggered.push(x + 1);
    })
    .shift((x: number) => {
      return {
        then(callback: Function) {
          setTimeout(() => {
            triggered.push(x + 2);
            callback()
          }, 100)
        }
      }
    })
    .add(async (x: number) => {
      triggered.push(x + 3);
    }, 10)
    .run(1);

  expect(triggered[0]).toBe(4);
  expect(triggered[1]).toBe(3);
  expect(triggered[2]).toBe(2);
});

test('promise task interface test', async () => {
  const queue = new TaskQueue;

  let triggered: number[] = [];

  // @ts-ignore
  await queue.push(async () => {
    triggered.push(1);
  }).shift(async () => {
    triggered.push(2);
  }).add(async () => {
    triggered.push(3);
  }, 10);

  expect(triggered[0]).toBe(3);
  expect(triggered[1]).toBe(2);
  expect(triggered[2]).toBe(1);
});
