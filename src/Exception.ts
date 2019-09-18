import { IException } from './types';

/**
 * Exceptions are used to give more information
 * of an error that has occured
 */
export default class Exception implements IException {
  /**
   * @public code
   */
  public code: number;

  /**
   * @public error
   */
  public error: Error;

  /**
   * @public errors
   */
  public errors: object = {};

  /**
   * @public message
   */
  public message: string;

  /**
   * @public name
   */
  public name: string;

  /**
   * @public stack
   */
  public stack: string = '';

  /**
   * An exception should provide a message and a name
   *
   * @param message
   * @param code
   */
  public constructor(message: string, code: number = 500) {
    this.message = message;
    this.name = this.constructor.name;
    this.code = code;
    this.error = new Error(message);

    if (this.error.stack) {
      this.stack = this.error.stack;
    }
  }

  /**
   * General use expressive reasons
   *
   * @param message
   * @param values
   */
  public static for(message: string, ...values: any[]): Exception {
    values.forEach((value: any) => {
      message = message.replace('%s', value);
    });

    return new this(message);
  }

  /**
   * Expressive error report
   *
   * @param errors
   */
  public static forErrorsFound(errors: object): Exception {
    const exception = new this('Invalid Parameters');
    exception.errors = errors;
    return exception;
  }
}
