export class AppError {
  public readonly errorMessage: string
  public readonly statusCode: number
  constructor (errorMessage: string, statusCode: number = 400) {
    this.errorMessage = errorMessage
    this.statusCode = statusCode
  }
}
