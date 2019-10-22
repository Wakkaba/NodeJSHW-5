const router = require("express").Router();

const { usersMiddleware } = require("../../middleware");

const { User } = require("../../controllers");

const { authController } = require("../../controllers");

router.post("/", usersMiddleware.isUserValid, authController.authUserToken);

module.exports = router;
