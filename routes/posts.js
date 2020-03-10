const express = require('express');
const PostsController = require('../controllers/PostsController');

const router = express.Router();

router.get("/", PostsController.getAllPosts);
router.post("/create", PostsController.addPosts);

module.exports = router;