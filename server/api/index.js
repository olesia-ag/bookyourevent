const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/venues", require("./venues"));
router.use("/events", require("./events"));
router.use("/requests", require("./requests"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
