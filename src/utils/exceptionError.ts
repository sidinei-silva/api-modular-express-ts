interface errorCustom {
  title: string;
  messages: Array<string>;
}

class ExceptionError extends Error {
  public statusCode: number;

  public message: string;

  public errors: Array<string>;

  constructor(statusCode: number, { title, messages }: errorCustom) {
    super();
    this.statusCode = statusCode;
    this.message = title;
    this.errors = messages;
  }
}

export default ExceptionError;
