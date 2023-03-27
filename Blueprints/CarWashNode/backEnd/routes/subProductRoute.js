const express = require("express")
const { createSubProduct, getAllSubProducts, updateSubProduct, deleteSubProduct, getSubProduct, getSubProductByBranch} = require("../controllers/subProductController")
const { isAuthenticated, authorizeRole } = require("../middleWare/auth")
const router = express.Router()
 
router.route("/subProduct").get(isAuthenticated,getAllSubProducts).post(isAuthenticated,getSubProductByBranch)
router.route("/subProduct/create").post(isAuthenticated,authorizeRole('merchant'),createSubProduct)
router.route("/subProduct/:id").put(isAuthenticated,authorizeRole('merchant'),updateSubProduct).delete(isAuthenticated,authorizeRole('merchant'),deleteSubProduct).get(getSubProduct)



module.exports = router