const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// import routes
const posts = require('./routes/posts');

// connection mysql
const connection = require('./config/database');

// models
const Post = require('./models/post');
const Comment = require('./models/comment');
const Category = require('./models/category');
const Types = require('./models/type');

const Users = require('./models/user');
const Tags = require('./models/tag');

const app = express();





connection.sync({force:true})
    .then(result => {

        app.listen(5000, () => console.log('Server ON'))
    })
    .catch((err) => {
        console.log('error: ', err)
    })
