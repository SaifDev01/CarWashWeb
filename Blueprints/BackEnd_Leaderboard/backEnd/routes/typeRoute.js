const express = require("express")
const { createType, deleteType , getAllType, findType, updateType} = require("../controllers/typeController")
const router = express.Router()

router.route("/type/create").post(createType)
router.route("/type/:id").delete(deleteType).get(findType)
router.route('/type').get(getAllType).put(updateType)


module.exports = router
// put(updateType).