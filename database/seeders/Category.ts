import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Category from 'App/Models/Category';

export default class CategorySeeder extends BaseSeeder {
  public async run() {

    await Category.query().delete();
    
    await Category.createMany([
      { name: 'Sofás' },
      { name: 'Cadeiras' },
      { name: 'Mesas' },
    ]);
  }
}
