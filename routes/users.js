let express = require('express');
let router = express.Router();

let controller = require("../controllers/users");

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById); //localhost:3000/users1
router.post('/', controller.addUser);
router.put('/:id', controller.editUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;