import { Category } from '../infra/typeorm/entities/Category'

export interface ICategoriesRepository {
  create: (name: string, description: string) => Promise<void>
  loadAll: () => Promise<Category[]>
  findByName: (name: string) => Promise<Category | null>
}
