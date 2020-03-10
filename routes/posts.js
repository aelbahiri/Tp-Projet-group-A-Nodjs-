const express = require('express');
const PostsController = require('../controllers/PostsController');

const router = express.Router();

<<<<<<< HEAD
router.get("/", PostsController.getAllPosts);
router.post("/create", PostsController.addPosts);
=======
router.get('', PostsController.getAllPosts);
router.post('', PostsController.addPosts);
router.put('/:id', PostsController.updatePost);
//router.get('/:id/edit', PostsController.editPost)
router.get('/:id', PostsController.showOnePost)
router.patch('/:id', PostsController.patchPost)
router.delete('/:id', PostsController.deletePost)
>>>>>>> 04a9375a23a437b49a95683667fb747b5e1b25b7

module.exports = router;