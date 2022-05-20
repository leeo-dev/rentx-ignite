import { UpdateUserAvatarController } from './../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { CreateUserController } from './../modules/accounts/useCases/createUser/CreateUserController'
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import multer from 'multer'
import uploadConfig from '../config/upload'

import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
const authenticateUserController = new AuthenticateUserController()
const userRouter = Router()
const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))
userRouter.post('/', createUserController.handle)
userRouter.post('/sessions', authenticateUserController.handle)
userRouter.use(ensureAuthenticated)
userRouter.patch('/avatar', uploadAvatar.single('avatar'), updateUserAvatarController.handle)
export { userRouter }
