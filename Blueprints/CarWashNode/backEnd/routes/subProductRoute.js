const express = require("express")
const { createSubProduct, getAllSubProducts, updateSubProduct, deleteSubProduct, getSubProduct} = require("../controllers/subProductController")
const { isAuthenticated, authorizeRole } = require("../middleWare/auth")
const router = express.Router()
 
router.route("/subProduct").get(getAllSubProducts)
router.route("/subProduct/create").post(isAuthenticated,authorizeRole('admin'),createSubProduct)
router.route("/subProduct/:id").put(isAuthenticated,authorizeRole('admin'),updateSubProduct).delete(isAuthenticated,authorizeRole('admin'),deleteSubProduct).get(getSubProduct)



module.exports = router