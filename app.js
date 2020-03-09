const express = require('express');
const path = require('path');
const bodyParser = require('body-Parser');
const cors = require('cors');

// import routes
const categories = require('./routes/categories');
const comment = require('./routes/comment');
const posts = require('./routes/posts');
const tags = require('./routes/tags');
const types = require('./routes/posts');
const users = require('./routes/users');


// connection mysql
const connection = require('./config/database');

// models
const Post = require('./models/post');
const Categories = require('/models/categories');
const Comment = require('/models/comment');
const Posts = require('/models/post');
const Tags = require('/models/tags');
const Types = require('/models/types');
const Users = require('/models/users');

const app = express();
// app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(cors())
app.use('/categories', categories)
app.use('/comment', comment)
app.use('/users', users),
    app.use('/products', products)
app.use('/categories', categories)
app.use('/users', users)

connection.sync()
    .then(result => {

        app.listen(5000, () => console.log('Server ON'))
    })
    .catch((err) => {
        console.log('error: ', err)
    })

const Post = require('./../models/post');