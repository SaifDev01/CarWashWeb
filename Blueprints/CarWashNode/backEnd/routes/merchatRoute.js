const express = require("express")
const { createMerchant, suspendMerchant, getMerchant, deleteMerchant, updateMerchat, getAllMerchants, loginMerchant, logoutMerchant } = require("../controllers/merchantController")
const router = express.Router()
const {isAuthenticated, authorizeRole} = require('../middleWare/auth')
 
router.route("/addMerchant").post(createMerchant)

router.route("/merchant/:id").get(getMerchant).delete(isAuthenticated, authorizeRole('admin'),deleteMerchant).put(isAuthenticated,authorizeRole('admin'),updateMerchat)
router.route('/suspendMerchant').post(isAuthenticated, authorizeRole('admin'),suspendMerchant)
router.route('/merchant').get(isAuthenticated, authorizeRole('admin'),getAllMerchants)
router.route('/merchant/login').post(loginMerchant)
router.route('/merchant/logout').post(isAuthenticated,logoutMerchant)

module.exports = router 