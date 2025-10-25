export class NotFoundError extends Error {
  constructor(public menssage: string) {
    super(menssage);
    this.name = 'NotFoundError';
  }
}
