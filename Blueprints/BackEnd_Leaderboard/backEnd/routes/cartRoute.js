const express = require("express")
const { addToCart, checkCart, removeCartItem, emptyCart} = require("../controllers/cartController")
const router = express.Router()

router.route("/cart/add").post(addToCart)
// router.route("/type/:id").delete(deleteType).get(findType)
// router.route('/type').get(getAllType).put(updateType)
router.route("/cart/:id").get(checkCart).post(emptyCart)
router.route("/cart/remove").put(removeCartItem)


module.exports = router
// put(updateType).