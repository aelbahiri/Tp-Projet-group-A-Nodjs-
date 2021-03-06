const User = require('./../models/user');

// ...rest of the initial code omitted for simplicity.
const { validationResult } = require('express-validator');

exports.getAllUsers =  (req, res) => {
   
    User
        .findAll()
        .then((users) => {

            res.status(200).json({error: false, data: users })
        })
        .catch(err => res.status(404).json({ error: true, message: 'users not found !'}))

}

exports.storeUser = (req, res) => {
     
   // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req); 
//   console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

    console.log(req.body)
    let { name, email, password } = req.body;
    console.log(req.body)
    User.create({
        name: name,
        email:email,
        password: password 
    })
    .then((user) => res.status(201).json({ error: false, data: user }))
    .catch((err) => res.status(400).json({ error: true, message: 'Please check the data for user' }))
   
}

exports.updateUser = (req, res) => {
    console.log(req.body)
    let { title, active } = req.body;

    User.update({
        title: title,
        active: (active == 'on') ? 1 : 0
    }, {
        where: { id: req.params.id }
    })
    .then((result) => res.status(202).json({ error: false, data: result }))
    .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
}

exports.showOneUser = async (req, res) => {
   
    try {
        let user = await user.findByPk(req.params.id);
        return res.status(200).json({error: false, data: user})
    } catch (error) {
        return res.status(404).json({ error: true, message: 'user not found' })
    }
    
        
}

exports.deleteUser =  (req, res) => {
    // return res.send('suppression')

    let id = req.params.id;
    User.destroy({ where: { id: id } })
    .then(result => res.status(200).json({ error: false, data: result }))
    .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))


    
}

exports.patchUser = (req, res) => {
    
    User.update(req.body, { where: { id: req.params.id } })
            .then(result => res.status(200).json({ error: false, data: result }))
            .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))
}


// exports.createCategory = (req, res) => {
//     res.render('category/create')
// }