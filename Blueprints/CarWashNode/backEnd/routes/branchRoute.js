const express = require("express")
const { createBranch, getBranch, deleteBranch, getAllBranch, updateBranch, changeProductStatus } = require("../controllers/branchController")
const { isAuthenticated, authorizeRole } = require("../middleWare/auth")
const router = express.Router()

router.route("/branch/create").post(isAuthenticated, authorizeRole('admin'),createBranch)
router.route("/branch/:id").delete(isAuthenticated, authorizeRole('admin'),deleteBranch).get(isAuthenticated, authorizeRole('admin'),getBranch).put(isAuthenticated,authorizeRole('admin'),updateBranch)
router.route('/branch').get(isAuthenticated,authorizeRole('admin'),getAllBranch)
router.route('/branch/product/status').put(changeProductStatus)


module.exports = router
// put(updateType).