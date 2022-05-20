import { Router } from 'express'
import { categoriesRouter } from './routes/Categories.routes'
import { specificationRouter } from './routes/Specifications.routes'
import { userRouter } from './routes/Users.routes'
const router = Router()
router.use('/api/categories', categoriesRouter)
router.use('/api/specifications', specificationRouter)
router.use('/api/users', userRouter)
export { router }
