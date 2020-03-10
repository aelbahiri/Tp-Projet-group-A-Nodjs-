const Tag = require('../models/tag');
const Post = require('../models/post');



exports.getAllTags = (req, res) => {

    Tag
        .findAll({ include: [{ model: Post }] })
        .then((tags) => {
            console.log(tags)
            res.status(200).json({ error: false, data: tags })
        })
        .catch(err => res.status(404).json({ error: true, message: 'tags not found!' }))

}

exports.storeTag = (req, res) => {

    let { libelle } = req.body;

    Tag.create({
        libelle: libelle,
        postId: post
    })
        .then((tag) => res.status(201).json({ error: false, data: tag }))
        .catch((err) => res.status(400).json({ error: true, message: 'Bad request !' }))

}

exports.updateTag = (req, res) => {
    return res.send('modification totale')
}

exports.showOneTag = (req, res) => {

    Tag.findByPk(req.params.id)
        .then(tag => {
            res.status(200).json({ error: false, data: tag })
        })
        .catch(err => res.status(404).json({ error: true, message: 'product not found !' }))
}

exports.deleteTag = (req, res) => {

    let id = req.params.id;

    Tag.destroy({ where: { id: id } })
        .then(() => res.status(204).json({}))
        .catch((err) => res.status(403).json({ error: true, message: 'impossible to delete this resource !' }))
}


exports.patchTag = (req, res) => {
    return res.send('modification partielle')
}


