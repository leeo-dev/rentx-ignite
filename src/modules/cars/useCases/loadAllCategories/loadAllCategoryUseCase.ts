import { injectable, inject } from 'tsyringe'
import { Category } from '../../infra/typeorm/entities/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

@injectable()
export class LoadAllCategoryUseCase {
  constructor (@inject('CategoriesRepository') private readonly categoriesRepository: ICategoriesRepository) {}
  async execute (): Promise<Category[]> {
    return await this.categoriesRepository.loadAll()
  }
}
