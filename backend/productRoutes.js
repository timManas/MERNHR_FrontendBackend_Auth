import express from 'express'
import { getProducts, getProductDetails } from './productController.js'

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.route('/:id').get(getProductDetails)

export default router
