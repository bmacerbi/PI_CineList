const clientController = require("../controller/clientController");
const router = require("express").Router();

router.post('/SignUp',clientController.registerNewUser)
router.post('/Login',clientController.login)

module.exports = router;