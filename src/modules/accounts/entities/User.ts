import { randomUUID } from 'crypto'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  driver_license: string

  @Column({ default: null })
  avatar: string

  @Column({ default: false })
  isAdmin: boolean

  @CreateDateColumn()
  created_at?: Date

  constructor () {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}
