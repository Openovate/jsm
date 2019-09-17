import { reflect, traits } from '../src';

test('Reflection test', () => {
  class Foo1 {
    foo(x: number, y: number, z: number) {
      return x + y + z;
    }
  }

  const foo = new Foo1;
  const names = reflect(foo.foo).getArgumentNames();

  expect(names.length).toBe(3);
  expect(names[0]).toBe('x');
  expect(names[1]).toBe('y');
  expect(names[2]).toBe('z');

  const descriptors1 = reflect(Foo1).getDescriptors();
  expect(typeof descriptors1.foo.value).toBe('function');

  const descriptors2 = reflect(foo).getDescriptors();
  expect(typeof descriptors2.foo.value).toBe('function');

  const methods1 = reflect(Foo1).getMethods();
  expect(typeof methods1.foo).toBe('function');

  const methods2 = reflect(foo).getMethods();
  expect(typeof methods2.foo).toBe('function');
});

test('traits test', () => {
  class Bar {
    bar() {}
  }

  class Zoo {
    zoo() {}
  }

  class Foo2 extends traits(Bar, Zoo) {
    foo() {}
  }

  const foo = new Foo2;

  expect(typeof foo.foo).toBe('function');
  expect(typeof foo.bar).toBe('function');
  expect(typeof foo.zoo).toBe('function');
});

test('dynamic traits test', () => {
  const methods = ['bar', 'zoo'];
  const DynamicTrait: { [key: string]: Function } = {};

  methods.forEach((method: string) => {
    DynamicTrait[method] = function() {}
  })

  class Foo3 extends traits(DynamicTrait) {
    foo() {}
  }

  const foo = new Foo3;

  expect(typeof foo.foo).toBe('function');
  expect(typeof foo.bar).toBe('function');
  expect(typeof foo.zoo).toBe('function');

});
