import { inject, injectable } from 'tsyringe'
import { Specification } from '../../infra/typeorm/entities/Specification'
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

@injectable()
export class LoadAllSpecificationsUseCase {
  constructor (@inject('SpecificationsRepository') private readonly specificationsRepository: ISpecificationRepository) {}
  async execute (): Promise<Specification[]> {
    return await this.specificationsRepository.loadAll()
  }
}
