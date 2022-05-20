import { Router } from 'express'

import { LoadAllSpecificationsController } from './../modules/cars/useCases/loadAllSpecifications/loadAllSpecificationsController'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
const specificationRouter = Router()

const createSpecificationController = new CreateSpecificationController()
const loadAllSpecificationController = new LoadAllSpecificationsController()

specificationRouter.post('/', createSpecificationController.handle)
specificationRouter.get('/', loadAllSpecificationController.handle)

export { specificationRouter }
