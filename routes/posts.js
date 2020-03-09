const express = require('express');
const PostsController = require('../controllers/PostsController');

const router = express.Router();

router.get("/posts", PostsController.getAllPosts);

module.exports = router;