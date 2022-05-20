import { AppError } from './../errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { UsersRepository } from '../modules/accounts/repositories/implementations/IUsersRepository'

interface IPayLoad {
  sub: string
}

export async function ensureAuthenticated (request: Request, response: Response, next: NextFunction): Promise<void> {
  const authHeader = request.headers.authorization
  if (!authHeader) throw new AppError('Token missing', 401)
  const token = authHeader.split(' ')[1]
  try {
    const { sub: userId } = verify(token, '4670dbe5c65cbc5b0861cd4684d28e9dc30006dc') as IPayLoad
    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(userId)
    if (!user) throw new AppError('Invalid token', 401)
    request.user = {
      id: userId
    }
  } catch (error) {
    throw new AppError('Invalid token', 401)
  }

  next()
}
