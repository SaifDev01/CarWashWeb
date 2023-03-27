const express = require("express")
const { addToCart, checkCart, removeCartItem, emptyCart} = require("../controllers/cartController")
const {isAuthenticated,authorizeRole} = require('../middleWare/auth')
const router = express.Router()

router.route("/cart/add").post(isAuthenticated,addToCart)
// router.route("/type/:id").delete(deleteType).get(findType)
// router.route('/type').get(getAllType).put(updateType)
router.route("/cart").get(isAuthenticated,checkCart).post(isAuthenticated,emptyCart)
router.route("/cart/remove").put(isAuthenticated,removeCartItem)


module.exports = router
// put(updateType).