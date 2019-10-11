/**
 * Registry are designed to easily manipulate data in
 * preparation to integrate with any multi dimensional
 * data store.
 */
export default class Registry {
  /**
   * @protected {Object} listeners
   */
  protected data: AnyObject<any>;

  /**
   * Sets the initial data
   */
  public constructor(data: AnyObject<any> = {}) {
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
    let data: AnyObject<any> = this.data;

    path.forEach((key: Index) => {
      data = data[key];
    });

    return data[last];
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
    let data: AnyObject<any> = this.data;

    path.forEach((key: Index) => {
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
    let data: AnyObject<any> = this.data;

    path.forEach((key: Index) => {
      data = data[key];
    });

    delete data[last];

    return this;
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
   * Transforms an object into an arra
   *
   * @param {Object} object
   *
   * @return {Array}
   */
  private makeArray(hash: AnyObject<any>): Array<any> {
    const array: any[] = [];

    const keys: Index[] = Object.keys(hash);

    keys.sort();

    keys.forEach((key: Index) => {
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
  private makeObject(array: Array<any>): object {
    return Object.assign({}, array);
  }

  /**
   * Returns true if object keys is all numbers
   *
   * @param hash - the object to test
   */
  private shouldBeAnArray(hash: AnyObject<any>): boolean {
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
  private walk(data: AnyObject<any>, path: (Index|null)[], value: any): Registry {
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

//custom interfaces and types

/**
 * Possible path types
 */
export declare type Index = string|number;

/**
 * Generic any kind of object
 */
export interface AnyObject<T> {
  [key: string]: T
}
