import { Specification } from '../../../infra/typeorm/entities/Specification'
import { ISpecificationRepository } from '../../../repositories/ISpecificationRepository'
import AppDataSource from '../../../../../database/data-source'
import { Repository } from 'typeorm'

export class SpecificationsRepository implements ISpecificationRepository {
  private readonly repository: Repository<Specification>
  constructor () {
    this.repository = AppDataSource.getRepository(Specification)
  }

  async create (name: string, description: string): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    })
    await this.repository.save(specification)
  }

  async loadAll (): Promise<Specification[]> {
    const specifications = await this.repository.find()
    return specifications
  }

  async findByName (name: string): Promise<Specification | null> {
    const specification = this.repository.findOne({ where: { name } })
    return await specification
  }
}
