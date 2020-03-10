const express = require('express');
const TypeController = require('./../controllers/TypeController')

const router = express.Router();

router.get('', TypeController.getAllTypes);
router.post('', TypeController.storeType);
router.put('/:id', TypeController.updateType);
//router.get('/:id/edit', TypeController.editType)
router.get('/:id', TypeController.showOneType)
router.patch('/:id', TypeController.patchType)
router.delete('/:id', TypeController.deleteType)

module.exports = router;