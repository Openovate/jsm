const { TaskQueue } = require('../dist');

test('task run test', async () => {
  const queue = new TaskQueue;

  let triggered = [];

  await queue
    .push(async x => {
      triggered.push(x + 1);
    })
    .shift((x) => {
      return {
        then(callback) {
          setTimeout(() => {
            triggered.push(x + 2);
            callback()
          }, 100)
        }
      }
    })
    .add(async x => {
      triggered.push(x + 3);
    }, 10)
    .run(1);

  expect(triggered[0]).toBe(4);
  expect(triggered[1]).toBe(3);
  expect(triggered[2]).toBe(2);
});

test('promise task interface test', async () => {
  const queue = new TaskQueue;

  let triggered = [];

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
