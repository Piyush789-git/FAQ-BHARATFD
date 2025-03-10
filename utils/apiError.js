class APIError extends Error {
    constructor(
      statusCode,
      message = "Something went wrong",
      type = "UNKNOWN",
      errors = []
    ) {
      super(message);
      this.statusCode = statusCode;
      this.type = type;
      this.success = false;
      this.errors = errors;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  // export default APIError;

  export { APIError };
