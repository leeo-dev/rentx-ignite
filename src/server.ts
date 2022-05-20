import { AppError } from './errors/AppError'
import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUI from 'swagger-ui-express'
import { router } from './routes'
import swaggerFile from './swagger.json'
import AppDataSource from './database/data-source'
import './shared/container'
const app = express()
app.use(express.json())
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use(router)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  console.log(err)
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ error: err.errorMessage })
  }
  return response.status(500).json({ status: 'error', message: `Internal server error: ${err.message}` })
})

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => console.log('Server is running on: http://localhost:3000'))
  })
  .catch((error) => console.log(error))
AppDataSource.initialize().catch(console.error)
