import { Category } from '../../infra/typeorm/entities/Category'
import { ICategoriesRepository } from '../ICategoriesRepository'

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category [ ] = []
  async create (name: string, description: string): Promise<void> {
    const category = new Category()
    Object.assign(category, {
      name,
      description
    })
    this.categories.push(category)
  }

  async loadAll (): Promise<Category[]> {
    return this.categories
  }

  async findByName (name: string): Promise<Category | null> {
    const category = this.categories.find(category => category.name === name) as Category
    return category
  }
}
