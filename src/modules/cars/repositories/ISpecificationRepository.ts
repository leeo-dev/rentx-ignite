import { Specification } from '../infra/typeorm/entities/Specification'

export interface ISpecificationRepository {
  create: (name: string, description: string) => Promise<void>
  loadAll: () => Promise<Specification[]>
  findByName: (name: string) => Promise<Specification | null>
}
