import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Product from './Product';

export default class CartItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public userId: number;

  @column()
  public productId: number;

  @column()
  public quantity: number;

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>;
}