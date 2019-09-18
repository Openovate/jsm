import { AnyObject } from './types';

export default class Reflection {
  /**
   * The definition which could be a function or an object
   */
  protected definition: Function|object;

  /**
   * Native methods we should not return
   */
  private nativeMethods: string[] = [
    'constructor',
    '__proto__',
    '__defineGetter__',
    '__defineSetter__',
    'hasOwnProperty',
    '__lookupGetter__',
    '__lookupSetter__',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString'
  ];

  /**
   * Sets the definition
   *
   * @param definition
   */
  public constructor(definition: Function|object) {
    this.definition = definition;
  }

  /**
   * Returns the argument clause of a function
   */
  public getArgumentNames(): string[] {
    if (typeof this.definition !== 'function') {
      return [];
    }

    let clause = this.definition.toString();
    if (clause.indexOf('function') !== 0) {
      clause = 'function ' + clause;
    }

    const matches = clause
      .replace(/[\r\n\s]+/g, ' ')
      .match(/(?:function\s*\w*)?\s*(?:\((.*?)\)|([^\s]+))/);

    if (!matches || !matches.length) {
      return [];
    }

    const names = matches.slice(1,3).join('').split(/\s*,\s*/);

    if (names.length === 1 && names[0] === '') {
      names.pop();
    }

    return names;
  }

  /**
   * Returns where the descriptors are defined
   */
  public getDescriptors(): AnyObject<any> {
    return Object.getOwnPropertyDescriptors(this.getMethods());
  }

  /**
   * Returns where the methods are defined
   */
  public getMethods(): AnyObject<Function> {
    const prototype = {};
    const definition = this.getPrototypeOf();

    //for short hand functions ie. () => {}, there is no prototype
    if (!definition) {
      return prototype;
    }

    Object.getOwnPropertyNames(definition).forEach((property: string) => {
      if(this.nativeMethods.indexOf(property) !== -1) {
        return;
      }

      const descriptor = Object.getOwnPropertyDescriptor(definition, property);

      if (!descriptor) {
        return;
      }

      if (typeof descriptor.value === 'function') {
        // Not sure:
        // Element implicitly has an 'any' type because expression of
        // type 'string' can't be used to index type '{}'. No index signature
        // with a parameter of type 'string' was found on type '{}'.
        // @ts-ignore
        prototype[property] = definition[property];
        return;
      }

      if (typeof descriptor.get === 'function'
        || typeof descriptor.set === 'function'
      ) {
        Object.defineProperty(prototype, property, descriptor);
      }
    });

    const reflection = new Reflection(Object.getPrototypeOf(definition));
    return Object.assign(prototype, reflection.getMethods());
  }

  /**
   * Returns the actual prototype location
   *
   * @param definition
   */
  public getPrototypeOf(): object {
    if (typeof this.definition === 'function') {
      return this.definition.prototype;
    }

    return this.definition;
  }
}

function reflect(definition: Function|object): Reflection {
  return new Reflection(definition);
};

function traits(...definitions: (Function|object)[]): {new(...args: any[]): any} {
  const definition = class {};

  if (!definitions.length) {
    return definition;
  }

  const reflection = new Reflection(definition);

  definitions.forEach((definition: Function|object) => {
    const descriptors = (new Reflection(definition)).getDescriptors();

    Object.keys(descriptors).forEach((method: string) => {
      //if there's already a descriptor for this
      if (reflection.getDescriptors()[method]) {
        //dont add
        return;
      }

      //add it
      Object.defineProperty(reflection.getPrototypeOf(), method, descriptors[method]);
    });
  });

  return definition;
}

export {
  Reflection,
  reflect,
  traits
}
