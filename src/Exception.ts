/**
 * Exceptions are used to give more information
 * of an error that has occured
 */
export default class Exception {
  /**
   * The custom exception code
   */
  public code: number;

  /**
   * The original error object
   */
  public error: Error;

  /**
   * A custom list of itemized errors
   */
  public errors: object = {};

  /**
   * The exception message
   */
  public message: string;

  /**
   * The name of the exception
   */
  public name: string;

  /**
   * The stack trace that led up to this exception
   */
  public stack: string = '';

  /**
   * An exception should provide a message and a name
   *
   * @param message - The exception message
   * @param code - The custom exception code
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
   * @param message - The exception message template. Uses `%s` to represent values
   * @param values - The exception message values to bind in order of `%s`
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
   * @param errors - The itemized errors found
   */
  public static forErrorsFound(errors: object): Exception {
    const exception = new this('Invalid Parameters');
    exception.errors = errors;
    return exception;
  }
}
