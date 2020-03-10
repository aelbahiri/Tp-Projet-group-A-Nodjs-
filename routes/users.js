const express = require('express');
const UserController = require('./../controllers/UserController');
// imortation req body 
const { body } = require('express-validator');



const router = express.Router();

//router.get('/create', CategoryController.createCategory);
router.get('', UserController.getAllUsers); 
router.post('', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6, max:10}),
    body('name').isAlphanumeric()
       ],
 UserController.storeUser);
router.put('/:id', UserController.updateUser);
//router.get('/:id/edit', CategoryController.editCategory)
router.get('/:id', UserController.showOneUser)
router.patch('/:id', UserController.patchUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router;