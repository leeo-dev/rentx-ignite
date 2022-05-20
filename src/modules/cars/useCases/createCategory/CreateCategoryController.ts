import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { container } from 'tsyringe'
import { Request, Response } from 'express'

export class CreateCategoryController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body
      const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
      await createCategoryUseCase.execute({ name, description })
      return response.status(201).send()
    } catch (error) {
      console.error(error)
      return response.status(400).send({ error: error.message })
    }
  }
}
