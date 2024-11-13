/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')

Route.group(() => {
  Route.post('/cart/items', 'CartController.addItem') 
  Route.delete('/cart/items/:id', 'CartController.removeItem') 
  Route.get('/cart', 'CartController.viewCart') 
}).middleware('auth')

Route.group(() => {
  Route.get('/products', 'ProductsController.list')
  Route.get('/products/:id', 'ProductsController.show')
  Route.post('/products', 'ProductsController.create') 
  Route.put('/products/:id/stock', 'ProductsController.updateStock') 
}).middleware('auth')

Route.get('/profile', 'UserController.profile').middleware('auth')