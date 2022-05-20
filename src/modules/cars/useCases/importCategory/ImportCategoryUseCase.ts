import { ICategoriesRepository } from './../../repositories/ICategoriesRepository'

import fs from 'fs'
import { parse } from 'csv-parse'
import { injectable, inject } from 'tsyringe'

interface IImportCategory {
  name: string
  description: string
}
@injectable()
export class ImportCategoryUseCase {
  constructor (@inject('CategoriesRepository') private readonly categoriesRepository: ICategoriesRepository) {}
  async loadCategories (file: Express.Multer.File | undefined): Promise<IImportCategory[]> {
    return await new Promise((resolve, reject) => {
      const path = String(file?.path)
      const categories: IImportCategory[] = []
      const stream = fs.createReadStream(path)
      const parseFile = parse()
      stream.pipe(parseFile)
      parseFile.on('data', (line): void => {
        const [name, description] = line
        categories.push({
          name,
          description
        })
      }).on('end', () => {
        fs.promises.unlink(path).catch(console.error)
        resolve(categories)
      })
    })
  }

  async execute (file: Express.Multer.File | undefined): Promise<void> {
    const categories = await this.loadCategories(file)
    categories.map(async ({ name, description }) => {
      const existsCategory = await this.categoriesRepository.findByName(name)
      if (!existsCategory) {
        await this.categoriesRepository.create(name, description)
      }
    })
  }
}
