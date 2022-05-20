import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'
import AppDataSource from 'database/data-source'
import { Repository } from 'typeorm'
import { Category } from '../entities/Category'

export class CategoriesRepository implements ICategoriesRepository {
  private readonly repository: Repository<Category>
  constructor () {
    this.repository = AppDataSource.getRepository(Category)
  }

  async create (name: string, description: string): Promise<void> {
    const category = this.repository.create({
      description,
      name
    })
    await this.repository.save(category)
  }

  async loadAll (): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName (name: string): Promise<Category | null> {
    const category = await this.repository.findOne({ where: { name } })
    return category
  }
}
