const User = require('../models/user');
const Type = require('../models/type');

// ...rest of the initial code omitted for simplicity.
const { validationResult } = require('express-validator');


exports.getAllTypes = (req, res) => {
    Type
        .findAll({ include: [{ model: User }] })
        .then((types) => {
            // console.log(types)
            res.status(200).json({ error: false, data: types })
        })
        .catch(err => res.status(404).json({ error: true, message: 'types not found!' }))

}

exports.storeType = (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    //   console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    console.log(req.body)

    let { label, active } = req.body;

    Type.create({
        label: label,
        active: active
    })
        .then((type) => res.status(201).json({ error: false, data: type }))
        .catch((err) => res.status(400).json({ error: true, message: 'Bad request !' }))

}

exports.updateType = (req, res) => {
    let { label, active } = req.body;

    Type.update({
        label: label,
        active: active
    }, {
        where: { id: req.params.id }
    })
        .then((result) => res.status(202).json({ error: false, data: result }))
        .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
}

exports.showOneType = (req, res) => {

    Product.findById(req.params.id)
        .then(type => {
            res.status(200).json({ error: false, data: type })
        })
        .catch(err => res.status(404).json({ error: true, message: 'type not found !' }))
}

exports.deleteType = (req, res) => {

    let id = req.params.id;

    Type.destroy({ where: { id: id } })
        .then(() => res.status(204).json({}))
        .catch((err) => res.status(403).json({ error: true, message: 'impossible to delete it !' }))
}

exports.patchType = (req, res) => {

    Type.update(req.body, {
        where: { id: req.params.id }
    })
        .then(result => res.status(200).json({ error: false, data: result }))
        .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))
}