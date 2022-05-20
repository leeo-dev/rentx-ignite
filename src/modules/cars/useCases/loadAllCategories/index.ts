import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { LoadAllCategoryController } from './loadAllCategoryController'
import { LoadAllCategoryUseCase } from './loadAllCategoryUseCase'

const categoriesRepository = new CategoriesRepository()
const loadAllCategoryUseCase = new LoadAllCategoryUseCase(categoriesRepository)
export const loadAllCategoryController = new LoadAllCategoryController(loadAllCategoryUseCase)
