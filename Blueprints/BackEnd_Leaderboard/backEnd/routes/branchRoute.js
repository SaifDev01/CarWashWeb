const express = require("express")
const { createBranch, getBranch, deleteBranch, getAllBranch, updateBranch } = require("../controllers/branchController")
const router = express.Router()

router.route("/branch/create").post(createBranch)
router.route("/branch/:id").delete(deleteBranch).get(getBranch).put(updateBranch)
router.route('/branch').get(getAllBranch)


module.exports = router
// put(updateType).