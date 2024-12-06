class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

throw new CustomError('This is a custom error');