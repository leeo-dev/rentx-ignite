import { Router } from 'express'
import multer from 'multer'
import { ImportCategoryController } from './../modules/cars/useCases/importCategory/ImportCategoryController'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { LoadAllCategoryController } from '../modules/cars/useCases/loadAllCategories/loadAllCategoryController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
const categoriesRouter = Router()

const upload = multer({
  dest: './tmp'
})

const createCategoryController = new CreateCategoryController()
const loadAllCategoryController = new LoadAllCategoryController()
const importCategoryController = new ImportCategoryController()
categoriesRouter.use(ensureAuthenticated)
categoriesRouter.post('/', createCategoryController.handle)
categoriesRouter.get('/', loadAllCategoryController.handle)
categoriesRouter.post('/import', upload.single('file'), importCategoryController.handle)

export { categoriesRouter }
