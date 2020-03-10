const express = require('express');
const PostsController = require('../controllers/PostsController');

// imortation req body 
const { body } = require('express-validator');

const router = express.Router();
//import multer
var multer = require('multer')

//create path file img multer
var upload = multer({ dest: 'uploads/' })

router.get('', PostsController.getAllPosts);
router.post('', upload.single('avatar'),
    [
        body('title').isLength({ min: 6, max: 20 }).withMessage('Invalid title'),
        body('description').isLength({ min: 10, max: 50 }),
        body('urlImage').isAlphanumeric()
    ],
    PostsController.addPosts);
router.put('/:id', PostsController.updatePost);
//router.get('/:id/edit', PostsController.editPost)
router.get('/:id', PostsController.showOnePost)
router.patch('/:id', PostsController.patchPost)
router.delete('/:id', PostsController.deletePost)

module.exports = router;