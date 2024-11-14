import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Models/Category'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public img: string

  @column()
  public title: string

  @column()
  public price: number

  @column()
  public color: string

  @column()
  public type: string

  @column()
  public stock: number

  @column()
  public categoryId: number | null

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>
}
