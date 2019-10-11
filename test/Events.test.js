const { EventEmitter } = require('../dist');

test('event on', async () => {
  const emitter = new EventEmitter;

  expect(emitter).toBeInstanceOf(EventEmitter);

  const actual = emitter.on('on something', x => {});

  expect(actual).toBeInstanceOf(EventEmitter);
});

test('event matching', async () => {
  const emitter = new EventEmitter;

  emitter.on('match something', x => {});
  emitter.on('/match (something)/i', x => {});
  emitter.on('/match (some)(thing)/i', x => {});

  const matches = emitter.match('match something');

  expect(matches['match something'].pattern).toBe('match something');
  expect(matches['/match (something)/i'].pattern).toBe('/match (something)/i');
  expect(matches['/match (some)(thing)/i'].pattern).toBe('/match (some)(thing)/i');

  expect(matches['/match (something)/i'].variables.length).toBe(1);
  expect(matches['/match (some)(thing)/i'].variables.length).toBe(2);
});

test('trigger basic event', async () => {
  const emitter = new EventEmitter;

  let triggered = [];
  emitter.on('trigger basic something', async x => {
    expect(x).toBe(1);
    triggered.push(1);
  }, 1);

  emitter.on('trigger basic something', async x => {
    expect(x).toBe(1);
    triggered.push(2);
  }, 2);

  await emitter.emit('trigger basic something', 1);

  expect(triggered.length).toBe(2);
  expect(triggered[0]).toBe(2);
  expect(triggered[1]).toBe(1);
});

test('trigger advance event', async () => {
  const emitter = new EventEmitter;

  let triggered = [];
  emitter.on('trigger advance something', async x => {
    expect(x).toBe(1);
    triggered.push(1);
  });

  emitter.on('/trigger (advance) something/', async x => {
    expect(x).toBe(1);
    triggered.push(2);
    expect(emitter.event.variables[0]).toBe('advance')
  }, 2);

  const actual = await emitter.emit('trigger advance something', 1);

  expect(triggered.length).toBe(2);
  expect(triggered[0]).toBe(2);
  expect(triggered[1]).toBe(1);
  expect(actual).toBe(EventEmitter.STATUS_OK);
});

test('trigger incomplete event', async () => {
  const emitter = new EventEmitter;

  let triggered = [];
  emitter.on('trigger incomplete something', async x => {
    triggered.push(1);
  });

  emitter.on('/trigger (incomplete) something/', async x => {
    expect(x).toBe(1);
    triggered.push(2);
    return false;
  }, 2);

  const actual = await emitter.emit('trigger incomplete something', 1);

  expect(triggered.length).toBe(1);
  expect(triggered[0]).toBe(2);
  expect(actual).toBe(EventEmitter.STATUS_INCOMPLETE);
});

test('trigger unbind event', async () => {
  const emitter = new EventEmitter;
  let listener = async x => {
    triggered.push(1);
  };

  let triggered = [];
  emitter.on('trigger unbind something', listener);

  emitter.unbind('trigger unbind something');
  const actual = await emitter.emit('trigger unbind something');

  expect(triggered.length).toBe(0);
  expect(actual).toBe(EventEmitter.STATUS_NOT_FOUND);

  let listener2 = async x => {
    triggered.push(2);
  };

  emitter.on('trigger unbind something', listener);
  emitter.on('trigger unbind something', listener2);
  emitter.unbind('trigger unbind something', listener);

  const actual2 = await emitter.emit('trigger unbind something');

  expect(triggered.length).toBe(1);
  expect(triggered[0]).toBe(2);
  expect(actual2).toBe(EventEmitter.STATUS_OK);
});

test('event nesting', async () => {
  const emitter = new EventEmitter;

  emitter.on('on something', async x => {
    expect(emitter.event.event).toBe('on something');
    const actual = await emitter.emit('on something else', x + 1);
    expect(actual).toBe(200);
  });

  emitter.on('on something else', x => {
    expect(emitter.event.event).toBe('on something else');
  });

  await emitter.emit('on something', 1);
});

test('event regexp', async () => {
  const emitter = new EventEmitter;

  let triggered = 0;
  emitter.on('/^GET\\s\\/components\\/(.*)\\/*$/', async x => {
    expect(emitter.event.event).toBe('GET /components/heyo/beans');
    triggered ++
    expect(emitter.event.variables[0]).toBe('heyo/beans')
  });

  emitter.on(/^GET\s\/components\/(.*)\/*$/, async x => {
    expect(emitter.event.event).toBe('GET /components/heyo/beans');
    triggered ++
    expect(emitter.event.variables[0]).toBe('heyo/beans')
  });

  await emitter.emit('GET /components/heyo/beans', 1);

  expect(triggered).toBe(2)
});

test('event async', async() => {
  const emitter = new EventEmitter;

  const actual = [];

  emitter.on('async test', async() => {
    actual.push(1)
  });

  emitter.on('async test', async() => {
    actual.push(2)
  });

  emitter.on('async test', async() => {
    actual.push(3)
  });

  emitter.emit('async test')

  //something unexpected is that even on async the first listener is syncronous
  //I concluded that this is just how the async/await works
  expect(actual.length).toBe(1);

  //
  const actual2 = [];

  emitter.on('async test 2', (x) => {
    return {
      then(callback) {
        setTimeout(() => {
          actual2.push(x + 1);
          callback()
        }, 100)
      }
    }
  });

  await emitter.emit('async test 2', 1);
  expect(actual2[0]).toBe(2);
});

test('event use', async() => {
  const emitter1 = new EventEmitter;
  const emitter2 = new EventEmitter;

  let triggered = [];
  emitter1.on('trigger basic something', async x => {
    expect(x).toBe(1);
    triggered.push(1);
  }, 1);

  emitter2.on('trigger basic something', async x => {
    expect(x).toBe(1);
    triggered.push(2);
  }, 2);

  emitter1.use(emitter2)

  await emitter1.emit('trigger basic something', 1);

  expect(triggered.length).toBe(2);
  expect(triggered[0]).toBe(2);
  expect(triggered[1]).toBe(1);
})
