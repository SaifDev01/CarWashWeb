const express = require("express")
const { test } = require("../controllers/branchController")
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProduct} = require("../controllers/productController")
const { isAuthenticated, authorizeRole } = require("../middleWare/auth")
const router = express.Router()
 
router.route("/product").get(getAllProducts)
router.route("/product/create").post(isAuthenticated, authorizeRole('admin'),createProduct)
router.route("/product/:id").put(isAuthenticated,authorizeRole('admin'),updateProduct).delete(isAuthenticated,authorizeRole('admin'),deleteProduct).get(getProduct)

router.route('/testB').get(test)

module.exports = router