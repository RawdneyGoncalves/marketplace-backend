import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cart_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE');
      table.integer('quantity').notNullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
