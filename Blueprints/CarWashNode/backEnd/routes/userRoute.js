const express = require("express")
const { registerUserWithPhone, verifyOTP, suspendAccount, findMerchantNearMe, findUser, deleteUser, getAllUsers, updateRole, logoutUser } = require("../controllers/userController")
const router  = express.Router()
const {isAuthenticated, authorizeRole} = require('../middleWare/auth')
const {inputUserDetails, updateUserDetail, getUserDetails, deleteUserDetails} = require("../controllers/userDetailController")



router.route("/register").post(registerUserWithPhone)
router.route('/verifyotp').post(isAuthenticated ,verifyOTP)
router.route('/findMerchant').post( isAuthenticated, findMerchantNearMe)



//ADMIN ROUTES
router.route('/user/:id').get(isAuthenticated,authorizeRole('admin'),findUser).delete(isAuthenticated,authorizeRole('admin'),deleteUser)
router.route('/userDetails').post(isAuthenticated ,authorizeRole('admin') ,inputUserDetails).put(isAuthenticated, authorizeRole('admin'),updateUserDetail)
router.route('/userDetails/:id').get(isAuthenticated, authorizeRole('admin') ,getUserDetails).delete(isAuthenticated, authorizeRole('admin') ,deleteUserDetails)
router.route('/suspendAccount').post(isAuthenticated  , authorizeRole("admin")   , suspendAccount)
router.route('/user').get(isAuthenticated, authorizeRole('admin'),getAllUsers)
router.route('/updateRole').put(isAuthenticated, authorizeRole('admin'),updateRole)
router.route('/logout').get(logoutUser)






module.exports = router
