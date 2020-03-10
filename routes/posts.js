const express = require('express');
<<<<<<< HEAD
const PostsController = require('../controllers/PostsController');

const router = express.Router();

router.get("/posts", PostsController.getAllPosts);
router.post("/create", PostsController.addPosts);
=======
const PostsController = require('./../controllers/PostsController')

const router = express.Router();

// router.get('/posts', PostsController.getAllPosts);
// router.post('', PostsController.storePosts);
// router.put('/:id', PostsController.updatePosts);
// //router.get('/:id/edit', PostsController.editPosts)
// router.get('/:id', PostsController.showOnePosts)
// router.patch('/:id', PostsController.patchPosts)
// router.delete('/:id', PostsController.deletePosts)
>>>>>>> a82370ef20fad48150fb07da4a1ebc9c7b77b4e5

module.exports = router;