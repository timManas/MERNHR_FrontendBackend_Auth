import asyncHandler from 'express-async-handler'
import Product from './productModel.js'

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  console.log(
    'productRoutes products ----- ' + JSON.stringify(products, null, 4)
  ) // Notice this does not include "data" or "status" unlike axios responses
  res.json(products)
})

export const getProductDetails = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
