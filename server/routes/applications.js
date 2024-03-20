const express = require("express");
const router = express.Router();
const {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/applications");

router.route("/").post(createApplication).get(getAllApplications);

router
  .route("/:id")
  .get(getApplication)
  .delete(deleteApplication)
  .patch(updateApplication);

module.exports = router;
