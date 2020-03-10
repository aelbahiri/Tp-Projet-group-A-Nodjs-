const Post = require('../models/post');
const Category = require('../models/category');
const Comment = require('../models/comment');
const Tag = require('../models/tag');
const Type = require('../models/type');
const User = require('../models/user');

exports.getAllPosts = (req, res) => {
    Post
        .findAll({
            include: [
                {
                    model: User
                },
                { model: Tag },
                { model: Category },
                {
                    model: Comment,
                    include: [{ model: User }]
                }
            ]
        })
        .then((post) => {
            console.log(post)
            res.status(200).json({ error: false, data: post })
        })
        .catch(err => res.status(404).json({ error: true, message: 'No Posts Found Here!!' }))
}

exports.addPosts = (req, res) => {
    let { title, description, urlImage, active, userId, categoryId } = req.body;

    console.log(req.file)
    // return

    Post
        .create({
            title: title,
            description: description,
            urlImage: urlImage,
            active: active,
            userId: userId,
            categoryId: categoryId

        })
        .then((post) => {
            res.status(201).json({ error: false, data: post })
        })
        .catch(err => res.status(404).json({ error: true, message: 'Error Can Create Any Posts' }))

}

exports.updatePost = (req, res) => {
    let { title, description, urlImage, active } = req.body;

    Post.update({
        title: title,
        description: description,
        urlImage: urlImage,
        active: active
    }, {
        where: { id: req.params.id }
    })
        .then((result) => res.status(202).json({ error: false, data: result }))
        .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
}

exports.showOnePost = (req, res) => {

    Post.findByPk(req.params.id, {
        include: [
            { model: User },
            { model: Category }
        ]
    })
        .then(post => {
            res.status(200).json({ error: false, data: post })
        })
        .catch(err => res.status(404).json({ error: true, message: 'post not found !' }))
}

exports.deletePost = (req, res) => {

    let id = req.params.id;

    Post.destroy({ where: { id: id } })
        .then(() => res.status(204).json({}))
        .catch((err) => res.status(403).json({ error: true, message: 'impossible to delete it !' }))
}

exports.patchPost = (req, res) => {

    Post.update(req.body, {
        where: { id: req.params.id }
    })
        .then(result => res.status(200).json({ error: false, data: result }))
        .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))
}
