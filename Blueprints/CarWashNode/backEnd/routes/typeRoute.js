const express = require("express")
const { createType, deleteType , getAllType, findType, updateType} = require("../controllers/typeController")
const { isAuthenticated, authorizeRole } = require("../middleWare/auth")
const router = express.Router()

router.route("/type/create").post(createType)
router.route("/type/:id").delete(isAuthenticated,authorizeRole('admin'),deleteType)
// .get(findType)
router.route('/type').get(getAllType).put(isAuthenticated,authorizeRole('admin'), updateType)


module.exports = router
// put(updateType).

// (isAuthenticated,authorizeRole('admin'), 