import { AppError } from './../../../../errors/AppError'
import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'
import { ICreateUserDTO, IUsersRepository } from '../../repositories/IUsersRepository'

@injectable()
export class CreateUserUseCase {
  constructor (@inject('UsersRepository') private readonly usersRepository: IUsersRepository) {}
  async execute ({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (userAlreadyExists) throw new AppError('User already exists!')
    const passwordHash = await hash(password, 12)
    await this.usersRepository.create({ name, username, email, password: passwordHash, driver_license })
  }
}
