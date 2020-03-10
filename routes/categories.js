const express = require('express');
const CategoryController = require('./../controllers/CategoryController');

const router = express.Router();

//router.get('/create', CategoryController.createCategory);
router.get('', CategoryController.getAllCategories);
router.post('', CategoryController.storeCategory);
router.put('/:id', CategoryController.updateCategory);
router.get('/:id', CategoryController.showOneCategory)
router.delete('/:id', CategoryController.deleteCategory)
// router.get('/:id/edit', CategoryController.editCategory)

router.patch('/:id', CategoryController.patchCategory)


module.exports = router;