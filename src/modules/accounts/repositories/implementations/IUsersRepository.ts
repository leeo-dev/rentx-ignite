import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository'
import { User } from '@modules/accounts/entities/User'
import AppDataSource from '../../../../database/data-source'
import { Repository } from 'typeorm'

export class UsersRepository implements IUsersRepository {
  private readonly repository: Repository<User>
  constructor () {
    this.repository = AppDataSource.getRepository(User)
  }

  async findById (id: string): Promise<User | null> {
    const user = await this.repository.findOne({ where: { id } })
    return user
  }

  async findByEmail (email: string): Promise<User | null> {
    const user = await this.repository.findOne({ where: { email } })
    return user
  }

  async create ({ name, username, email, password, driver_license, id, avatar }: ICreateUserDTO): Promise<void> {
    const newUser = this.repository.create({ name, username, email, password, driver_license, id, avatar })
    await this.repository.save(newUser)
  }
}
