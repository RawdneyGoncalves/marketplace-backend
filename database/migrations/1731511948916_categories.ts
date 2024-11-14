import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('category_id').unsigned().nullable().references('id').inTable('categories').onDelete('SET NULL')  // Tornando a categoria opcional
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('category_id')
    })
  }
}
