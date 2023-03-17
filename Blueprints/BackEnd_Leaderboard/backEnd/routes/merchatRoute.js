const express = require("express")
const { createMerchant, suspendMerchant, getMerchant, deleteMerchant, updateMerchat, getAllMerchants, loginMerchant, logoutMerchant } = require("../controllers/merchantController")
const router = express.Router()
 
router.route("/addMerchant").post(createMerchant)

router.route("/merchant/:id").get(getMerchant).delete(deleteMerchant).put(updateMerchat)
router.route('/suspendMerchant').post(suspendMerchant)
router.route('/merchant').get(getAllMerchants)
router.route('/merchant/login').post(loginMerchant)
router.route('/merchant/logout').post(logoutMerchant)

module.exports = router 