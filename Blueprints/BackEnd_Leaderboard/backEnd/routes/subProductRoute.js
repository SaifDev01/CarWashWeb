const express = require("express")
const { createSubProduct, getAllSubProducts, updateSubProduct, deleteSubProduct, getSubProduct} = require("../controllers/subProductController")
const router = express.Router()
 
router.route("/subProduct").get(getAllSubProducts)
router.route("/subProduct/create").post(createSubProduct)
router.route("/subProduct/:id").put(updateSubProduct).delete(deleteSubProduct).get(getSubProduct)



module.exports = router