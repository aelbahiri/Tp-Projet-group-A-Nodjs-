const express = require('express');
const PostsController = require('./../controllers/PostsController')

const router = express.Router();

router.get('', PostsController.getAllCategories);
router.post('', PostsController.storePosts);
router.put('/:id', PostsController.updatePosts);
//router.get('/:id/edit', PostsController.editPosts)
router.get('/:id', PostsController.showOnePosts)
router.patch('/:id', PostsController.patchPosts)
router.delete('/:id', PostsController.deletePosts)

module.exports = router;