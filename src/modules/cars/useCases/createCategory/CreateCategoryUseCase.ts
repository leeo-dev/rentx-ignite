import { AppError } from './../../../../errors/AppError'
import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}
@injectable()
export class CreateCategoryUseCase {
  constructor (@inject('CategoriesRepository') private readonly categoriesRepository: ICategoriesRepository) {}
  async execute ({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)
    if (categoryAlreadyExists) throw new AppError('Category already exists!')
    await this.categoriesRepository.create(name, description)
  }
}
