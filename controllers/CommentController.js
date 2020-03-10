const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user')

exports.getAllComment = (req, res) => {

    Comment
        .findAll({ include: [{ model: Post }, { model: User }] })
        .then((comments) => {
            console.log(comments)
            res.status(200).json({ error: false, data: comments })
        })
        .catch(err => res.status(404).json({ error: true, message: 'comments not found!' }))

}

exports.storeComment = (req, res) => {

    let { content, post, user } = req.body;

    Comment.create({
        content: content,
        postId: post,
        UserId: user
    })
        .then((comments) => res.status(201).json({ error: false, data: comments }))
        .catch((err) => res.status(400).json({ error: true, message: 'Bad request !' }))

}

exports.updateComment = (req, res) => {
    return res.send('modification totale')
}


exports.deleteComment = (req, res) => {

    let id = req.params.id;

    comment.destroy({ where: { id: id } })
        .then(() => res.status(204).json({}))
        .catch((err) => res.status(403).json({ error: true, message: 'impossible to delete this resource !' }))
}



exports.patchComment = (req, res) => {
    return res.send('modification partielle')
}


