const express = require('express');
const PostsController = require('../controllers/PostsController');

const router = express.Router();

router.get('', PostsController.getAllPosts);
router.post('', PostsController.addPosts);
router.put('/:id', PostsController.updatePost);
//router.get('/:id/edit', PostsController.editPost)
router.get('/:id', PostsController.showOnePost)
router.patch('/:id', PostsController.patchPost)
router.delete('/:id', PostsController.deletePost)

module.exports = router;