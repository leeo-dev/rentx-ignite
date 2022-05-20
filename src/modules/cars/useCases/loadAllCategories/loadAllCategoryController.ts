import { LoadAllCategoryUseCase } from './loadAllCategoryUseCase'
import { container } from 'tsyringe'
import { Request, Response } from 'express'

export class LoadAllCategoryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const loadAllCategoryUseCase = container.resolve(LoadAllCategoryUseCase)
    const categories = await loadAllCategoryUseCase.execute()
    const statusCode = categories.length ? 200 : 204
    return response.status(statusCode).send(categories)
  }
}
