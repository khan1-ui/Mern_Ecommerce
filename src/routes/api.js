const express = require('express')
const ProductController = require('../controllers/ProductController');
const router = express.Router()
//product
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandId',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryId',ProductController.ProductListByCategory)
router.get('/ProductListByKeyword/:KeywordId',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:RemarkId',ProductController.ProductListByRemark)
router.get('/ProductListBySimilar/:SimilarId',ProductController.ProductListBySimilar)
router.get('/ProductDetails/:DetailsId',ProductController.ProductDetails)
router.get('/ProductReviewList/:ReviewId',ProductController.ProductReviewList)



module.exports = router
