const express = require('express');
const TypeController = require('./../controllers/TypeController')

// imortation req body 
const { body } = require('express-validator');

const router = express.Router();

router.get('', TypeController.getAllTypes);
router.post('',
    [
        body('label').isLength({ min: 6, max: 10 }),
    ],
    TypeController.storeType);
router.put('/:id', TypeController.updateType);
//router.get('/:id/edit', TypeController.editType)
router.get('/:id', TypeController.showOneType)
router.patch('/:id', TypeController.patchType)
router.delete('/:id', TypeController.deleteType)

module.exports = router;