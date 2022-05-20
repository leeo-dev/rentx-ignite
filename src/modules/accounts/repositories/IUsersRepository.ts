import { User } from '../entities/User'

export interface ICreateUserDTO {
  name: string
  username: string
  email: string
  password: string
  driver_license: string
  id?: string
  avatar?: string
}
export interface IUsersRepository {
  create: (data: ICreateUserDTO) => Promise<void>
  findByEmail: (email: string) => Promise<User | null>
  findById: (id: string) => Promise<User | null>
}
