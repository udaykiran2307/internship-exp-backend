const express = require("express");
const router = express.Router();
const validatePostData = require("../../validations");
const {
  postTask,
  updateTaskById,
  getAllTasks,
  getCrmTasks,
  getEmbedTasks,
  getBusinessAppTasks,
} = require("../../controllers");
router.post("/", validatePostData, postTask);
router.put("/:id", updateTaskById);
router.get("/", getAllTasks);
router.get("/embed", getEmbedTasks);
router.get("/crm", getCrmTasks);
router.get("/business-app", getBusinessAppTasks);


module.exports = router;
