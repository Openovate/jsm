import { Exception } from '../src';

class TestExeption extends Exception {}

test('Exception test', () => {
  try {
    throw TestExeption.for('Something good is bad')
  } catch(e) {
    expect(e.name).toBe('TestExeption');
    expect(e.message).toBe('Something good is bad');
    expect(e.code).toBe(500);
  }

  try {
    throw TestExeption.for('Something good is bad', 'good', 'bad')
  } catch(e) {
    expect(e.name).toBe('TestExeption');
    expect(e.message).toBe('Something good is bad');
    expect(e.code).toBe(500);
  }

  try {
    throw TestExeption.for('Something %s is %s', 'good', 'bad')
  } catch(e) {
    expect(e.name).toBe('TestExeption');
    expect(e.message).toBe('Something good is bad');
    expect(e.code).toBe(500);
  }

  try {
    throw TestExeption.for('Something %s is %s', 1, [1])
  } catch(e) {
    expect(e.name).toBe('TestExeption');
    expect(e.message).toBe('Something 1 is 1');
    expect(e.code).toBe(500);
  }

  try {
    throw TestExeption.forErrorsFound({key: 'value'})
  } catch(e) {
    expect(e.name).toBe('TestExeption');
    expect(e.message).toBe('Invalid Parameters');
    expect(e.errors.key).toBe('value');
    expect(e.code).toBe(500);
  }
});
