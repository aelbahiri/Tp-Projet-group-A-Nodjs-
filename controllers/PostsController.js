const Post = require('../models/post');

exports.getAllPosts = (req, res) => {
    Post.findAll()
        .then((post) => {
            console.log(post)
            res.status(200).json({ error: false, data: post })
        })
        .catch(err => res.status(404).json({ error: true, message: 'No Posts Found Here!!' }))
}

exports.addPosts = (req, res) => {
    let { title, description, urlImage, active } = req.body;

    Post.create({
        title: title,
        description: description,
        urlImage: urlImage,
        active: active
    })
        .then((post) => {
            res.status(201).json({ error: false, data: post })
        })
        .ctach(err => res.status(404).json({ error: true, message: 'Error Can Create Any Posts' }))

}
