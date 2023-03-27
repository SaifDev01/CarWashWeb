const express = require("express")
const { test } = require("../controllers/branchController")
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProduct, getBranchProductByType, getOwnProducts} = require("../controllers/productController")
const { isAuthenticated, authorizeRole } = require("../middleWare/auth")
const router = express.Router()
 
router.route("/product").get(getAllProducts).post(getBranchProductByType)
router.route("/product/create").post(isAuthenticated, authorizeRole('merchant'),createProduct)
router.route("/product/:id").put(isAuthenticated,authorizeRole('merchant'),updateProduct).delete(isAuthenticated,authorizeRole('merchant'),deleteProduct).get(getProduct)
router.route('/testB').get(test)
router.route('/products/me').get(isAuthenticated, authorizeRole('merchant'),getOwnProducts)
module.exports = router