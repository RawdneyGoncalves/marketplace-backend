import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        title: 'Sofá 1',
        price: 1000.0,
        stock: 50,
        img: 'https://www.mueblesdico.com/cdn/shop/products/Sofa-modular-gris-dico.jpg?v=1623349410',
        color: 'gray',
        type: 'sofa',
      },
      {
        title: 'Sofá 2',
        price: 2000.0,
        stock: 30,
        img: 'https://cdn.istockphoto.com/photos/living-room-with-comfortable-sofa-and-modern-tv-unit-picture-id1213735397?k=20&m=1213735397&s=612x612&w=0&h=xPbV6FgoEj-nuH3N_GyTk2Cwr1X2WHzlhZhJ6vqAC9A=',
        color: 'blue',
        type: 'sofa',
      },
      {
        title: 'Sofá 3',
        price: 1500.0,
        stock: 20,
        img: 'https://media.istockphoto.com/id/1178598202/photo/modern-sofa-and-armchair-in-living-room.jpg?s=612x612&w=0&k=20&c=q8MF4r2u7ERAfXfpCw0iPHH5dUgFM2s6wnsdHSSzF5I=',
        color: 'green',
        type: 'sofa', 
      },
    ])
  }
}
