import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 255).notNullable()
      table.decimal('price', 12, 2).notNullable()
      table.integer('stock').notNullable().defaultTo(0)
      table.string('type', 255).notNullable()
      table.string('img', 255).notNullable()
      table.timestamps(true, true)
      table.string('color', 255).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
