const express = require('express');
const CategoryController = require('./../controllers/CategoryController');

// imortation req body 
const { body } = require('express-validator');

const router = express.Router();

router.get('', CategoryController.getAllCategories);
router.post('',
    [
        body('title').isLength({ min: 6, max: 20 }).withMessage('Invalid title'),
    ],
    CategoryController.storeCategory);
router.put('/:id', CategoryController.updateCategory);
router.get('/:id', CategoryController.showOneCategory)
router.delete('/:id', CategoryController.deleteCategory)
// router.get('/:id/edit', CategoryController.editCategory)

router.patch('/:id', CategoryController.patchCategory)

module.exports = router;