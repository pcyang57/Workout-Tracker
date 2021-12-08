const router = require("express").Router();
// Adding views and API routes
const apiRoutes = require("./api");
const views = require("./views");

router.use("/api", apiRoutes);
router.use("/", views);

module.exports = router;