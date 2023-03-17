const express = require("express")
const { registerUserWithPhone, verifyOTP, suspendAccount, findMerchantNearMe, findUser, deleteUser, getAllUsers, updateRole } = require("../controllers/userController")
const router  = express.Router()
const {isAuthenticated, authorizeRole} = require('../middleWare/auth')
const {inputUserDetails, updateUserDetail, getUserDetails, deleteUserDetails} = require("../controllers/userDetailController")



router.route("/register").post(registerUserWithPhone)
router.route('/verifyotp').post(verifyOTP)
router.route('/findMerchant').post(findMerchantNearMe)
router.route('/user/:id').get(findUser).delete(deleteUser)
router.route('/userDetails').post(inputUserDetails).put(updateUserDetail)
router.route('/userDetails/:id').get(getUserDetails).delete(deleteUserDetails)
//ADMIN ROUTES
router.route('/suspendAccount').post(isAuthenticated  , authorizeRole("admin")   , suspendAccount)
router.route('/user').get(getAllUsers)
router.route('/updateRole').put(updateRole)






module.exports = router
