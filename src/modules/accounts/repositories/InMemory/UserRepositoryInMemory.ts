import { User } from '../../entities/User'
import { ICreateUserDTO, IUsersRepository } from './../IUsersRepository'
export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = []
  async create (data: ICreateUserDTO): Promise<void> {
    const newUser = new User()
    Object.assign(newUser, {
      ...data
    })
    this.users.push(newUser)
  }

  async findByEmail (email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email) as User
    return user
  }

  async findById (id: string): Promise<User | null> {
    const user = this.users.find(user => user.id === id) as User
    return user
  }
}
