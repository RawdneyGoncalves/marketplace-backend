import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductRepository from 'App/Repositories/ProductRepository'
import ProductService from 'App/Services/ProductService'

export default class ProductsController {
  private productRepository = new ProductRepository()
  private productService = new ProductService()

  public async list({ response }: HttpContextContract) {
    try {
      const products = await this.productRepository.findAll()
      const productsList = products.map((product) => ({
        id: product.id,
        img: product.img,
        title: product.title,
        price: product.price,
        color: product.color,
        type: product.type
      }))

      return response.json({
        productInfo: {},
        cartItems: [],
        items: productsList
      })
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      return response.status(500).json({ error: 'Erro ao buscar produtos' })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const product = await this.productService.getProductDetails(params.id)
      if (!product) {
        return response.status(404).json({ error: 'Produto não encontrado' })
      }
      return product
    } catch (error) {
      return response.status(404).json({ error: 'Produto não encontrado' })
    }
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['title', 'price', 'type', 'stock', 'img', 'color'])
      const product = await this.productService.addProduct(data)
      return response.status(201).json(product)
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao criar produto',
        details: error.message
      })
    }
  }
  

  public async updateStock({ params, request, response }: HttpContextContract) {
    try {
      const quantity = request.input('quantity')
      const product = await this.productService.adjustStock(params.id, quantity)
      return response.json(product)
    } catch (error) {
      return response.status(404).json({ error: 'Produto não encontrado' })
    }
  }

  public async delete({ params, response }: HttpContextContract) {
    try {
      const product = await this.productService.getProductDetails(params.id)
      if (!product) {
        return response.status(404).json({ error: 'Produto não encontrado' })
      }
      await this.productService.deleteProduct(params.id)
      return response.status(204)
    } catch (error) {
      console.error('Erro ao deletar produto:', error)
      return response.status(500).json({ error: 'Erro ao deletar produto' })
    }
  }
}