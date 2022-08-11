const clientController = require("../controller/clientController");
const router = require("express").Router();

// Aqui estabelece a rota que vai executar o comando do controller exemploController

router.post('/SignUp',clientController.registerNewUser)
router.post('/Login',clientController.login)

module.exports = router;