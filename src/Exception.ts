/**
 * Exceptions are used to give more information
 * of an error that has occured
 */
export default class Exception {
  /**
   * @public {Integer} code
   */
  public code: number;

  /**
   * @public {Object} errors
   */
  public errors: object = {};

  /**
   * @public {String} message
   */
  public message: string;

  /**
   * @public {String} name
   */
  public name: string;

  /**
   * An exception should provide a message and a name
   *
   * @param {String} message
   * @param {Integer} code
   */
  public constructor(message: string, code: number = 500) {
    this.message = message;
    this.name = this.constructor.name;
    this.code = code;
  }

  /**
   * General use expressive reasons
   *
   * @param {String} message
   * @param {(...*)} values
   *
   * @return {Exception}
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
   * @param {*}
   *
   * @return {Exception}
   */
  public static forErrorsFound(errors: object): Exception {
    const exception = new this('Invalid Parameters');
    exception.errors = errors;
    return exception;
  }
}
