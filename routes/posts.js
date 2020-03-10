const express = require('express');
const PostsController = require('../controllers/PostsController');

const router = express.Router();
//import multer
var multer  = require('multer')

//create path file img multer
var upload = multer({ dest: 'uploads/' })

router.get('', PostsController.getAllPosts);
router.post('', upload.single('avatar'), PostsController.addPosts);
router.put('/:id', PostsController.updatePost);
//router.get('/:id/edit', PostsController.editPost)
router.get('/:id', PostsController.showOnePost)
router.patch('/:id', PostsController.patchPost)
router.delete('/:id', PostsController.deletePost)

module.exports = router;