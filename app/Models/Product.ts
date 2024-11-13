import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Category from './Category';

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public price: number;

  @column()
  public stock: number;

  @column()
  public categoryId: number;

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>;
}
