import { IRegistry, Index, AnyObject } from './types';

/**
 * Registry are designed to easily manipulate data in
 * preparation to integrate with any multi dimensional
 * data store.
 */
export default class Registry implements IRegistry {
  /**
   * @protected {Object} listeners
   */
  protected data: object;

  /**
   * Sets the initial data
   */
  public constructor(data = {}) {
    this.data = data;
  }

  /**
   * Retrieves the data stored specified by the path
   *
   * @param path - argument separated
   */
  public get(...path: Index[]): any {
    if (!path.length) {
      return this.data;
    }

    if (!this.has(...path)) {
      return null;
    }

    const last: any = path.pop();
    let data: { [key: string]: any } = this.data;

    path.forEach((key: string|number) => {
      data = data[key];
    });

    return data[last];
  }

  /**
   * Gets a value given the path in the registry.
   *
   * @param {String} notation  Name space string notation
   * @param {String} [separator = '.'] If you want to specify a different separator other than dot
   *
   * @return mixed
   */
  public getDot(notation: string, separator: string = '.'): any {
    const path = notation.split(separator)
    return this.get(...path);
  }

  /**
   * Returns true if the specified path exists
   *
   * @param {(...String)} [path]
   */
  public has(...path: Index[]): boolean {
    if (!path.length) {
      return false;
    }

    let found = true;
    const last: any = path.pop();
    let data: { [key: string]: any } = this.data;

    path.forEach((key: string|number) => {
      if (!found) {
        return;
      }

      if (typeof data[key] !== 'object') {
        found = false;
        return;
      }

      data = data[key];
    });

    return !(!found || typeof data[last] === 'undefined');
  }

  /**
   * Checks to see if a key is set
   *
   * @param {String} notation  Name space string notation
   * @param {String} [separator = '.'] If you want to specify a different separator other than dot
   *
   * @return {Boolean}
   */
  public hasDot(notation: string, separator: string = '.'): boolean {
    const path = notation.split(separator)
    return this.has(...path);
  }

  /**
   * Removes the data from a specified path
   *
   * @param {(...String)} [path]
   *
   * @return {Registry}
   */
  public remove(...path: Index[]): Registry {
    if (!path.length) {
      return this;
    }

    if (!this.has(...path)) {
      return this;
    }

    const last: any = path.pop();
    let data: { [key: string]: any } = this.data;

    path.forEach((key: string|number) => {
      data = data[key];
    });

    delete data[last];

    return this;
  }

  /**
   * Removes name space given notation
   *
   * @param {String} notation  Name space string notation
   * @param {String} [separator = '.'] If you want to specify a different separator other than dot
   *
   * @return {DotNotationTrait}
   */
  public removeDot(notation: string, separator: string = '.'): Registry {
    const path = notation.split(separator)
    return this.remove(...path);
  }

  /**
   * Sets the data of a specified path
   *
   * @param {(...String)} [path]
   * @param {*} value
   *
   * @return {Registry}
   */
  public set(...path: any[]): Registry {
    if (path.length < 1) {
      return this;
    }

    if (typeof path[0] === 'object') {
      Object.keys(path[0]).forEach(key => {
        this.set(key, path[0][key]);
      });

      return this;
    }

    const value: any = path.pop();
    this.walk(this.data, path, value);

    return this;
  }

  /**
   * Creates the name space given the space
   * and sets the value to that name space
   *
   * @param {String} notation Name space string notation
   * @param {*} value Value to set on this namespace
   * @param {String} [separator = '.'] If you want to specify a different separator other than dot
   *
   * @return {DotNotationTrait}
   */
  public setDot(notation: string, value: any, separator: string = '.'): Registry {
    const path = notation.split(separator);
    return this.set(...path, value);
  }

  /**
   * Transforms an object into an arra
   *
   * @param {Object} object
   *
   * @return {Array}
   */
  private makeArray(hash: object): Array<any> {
    const array: any[] = [];

    const keys: Index[] = Object.keys(hash);

    keys.sort();

    keys.forEach((key: string|number) => {
      // @ts-ignore
      array.push(hash[key])
    });
    return array;
  }

  /**
   * Transforms an object into an arra
   *
   * @param array - The array to transform
   */
  private makeObject(array: any[]): object {
    return Object.assign({}, array);
  }

  /**
   * Returns true if object keys is all numbers
   *
   * @param hash - the object to test
   */
  private shouldBeAnArray(hash: object): boolean {
    if (typeof hash !== 'object') {
      return false;
    }

    if (!Object.keys(hash).length) {
      return false;
    }

    for (const key in hash) {
      if (isNaN(parseInt(key)) || String(key).indexOf('.') !== -1) {
        return false;
      }
    }

    return true;
  }

  /**
   * Walks the data, look to the end and setting the value
   *
   * @param data - The current data pointer
   * @param path - The path to the object to set
   * @param value - The value of the last path to set
   */
  private walk(data: AnyObject<any>, path: Index[], value: any): Registry {
    let key = <Index> path.shift();
    if (key === null || key === '') {
      key = Object.keys(data).length;
    }

    if (typeof data[key] !== 'object') {
      data[key] = {};
    }

    //if more path
    if (path.length) {
      this.walk(data[key], path, value)

      //if next is not an array and next should be an array
      if (!Array.isArray(data[key]) && this.shouldBeAnArray(data[key])) {
        //transform next into an array
        data[key] = this.makeArray(data[key]);
      //if next is an array and next should not be an array
      } else if (Array.isArray(data[key]) && !this.shouldBeAnArray(data[key])) {
        //transform next into an object
        data[key] = this.makeObject(data[key]);
      }

      return this;
    }

    //no more path
    data[key] = value;
    return this;
  }
}
