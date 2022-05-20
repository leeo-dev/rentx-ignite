import { container } from 'tsyringe'
import { LoadAllSpecificationsUseCase } from './loadAllSpecificationsUseCase'
import { Request, Response } from 'express'

export class LoadAllSpecificationsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const loadAllSpecificationsUseCase = container.resolve(LoadAllSpecificationsUseCase)
    const categories = await loadAllSpecificationsUseCase.execute()
    const statusCode = categories.length ? 200 : 204
    return response.status(statusCode).send(categories)
  }
}
