import 'reflect-metadata'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'leeodev',
  password: 'ignite',
  database: 'rentx',
  synchronize: false,
  logging: false,
  entities: ['./src/modules/**/entities/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  subscribers: []
})

export default AppDataSource
