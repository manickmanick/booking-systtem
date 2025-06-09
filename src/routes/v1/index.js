const express = require("express");
const router = express.Router();
const {InfoController} =require("../../controllers/index")

const airplaneRoues = require("./airplane-routes")

router.get("/info",InfoController.info);

router.use("/airplanes",airplaneRoues)

module.exports = router;