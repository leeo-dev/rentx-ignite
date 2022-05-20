import { AppError } from './../../../../errors/AppError'
import { inject, injectable } from 'tsyringe'
import { UsersRepository } from '../../repositories/implementations/IUsersRepository'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

export interface IRequest {
  email: string
  password: string
}

export interface IResponse {
  user: { name: string, email: string }
  token: string
}

@injectable()
export class AuthenticateUserUseCase {
  constructor (@inject('UsersRepository') private readonly usersRepository: UsersRepository) {}
  async execute ({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new AppError('Email or password incorrect')

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) throw new AppError('Email or password incorrect')
    const token = sign({ id: user.id }, '4670dbe5c65cbc5b0861cd4684d28e9dc30006dc', {
      subject: user.id,
      expiresIn: '1d'
    })
    return { user: { name: user.name, email: user.email }, token }
  }
}
