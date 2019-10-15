const { EventPromise } = require('../dist');

test('basic promise', async() => {
  const promise = new EventPromise;

  promise.on('formula', ({x, y}, resolve) => {
    resolve([x + y, x]);
  })

  promise.on('formula', ([x, y], resolve) => {
    resolve.emit('formula2', [x, y]).then(resolved => {
      resolve(promise.abort(resolved + x + y));
    })
  })

  promise.on('formula2', ([x, y], resolve) => {
    resolve(x + y);
  })

  //this should not be called
  promise.on('formula', ([x, y], resolve) => {
    resolve(x + y);
  })

  const actual = await promise.emit('formula', {x: 1, y: 2});

  expect(actual).toBe(8);
});


test('promise use', async() => {
  const promise1 = new EventPromise;
  const promise2 = new EventPromise;

  promise1.on('formula', ({x, y}, resolve) => {
    resolve([x + y, x]);
  })

  promise2.on('formula', ([x, y], resolve) => {
    resolve(promise2.abort(x + y));
  })

  promise1.use(promise2)

  promise1.on('formula', ([x, y], resolve) => {
    resolve(x + y);
  })

  const actual = await promise1.emit('formula', {x: 1, y: 2});

  expect(actual).toBe(4);
})
