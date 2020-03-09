const express = require('express');
const path = require('path');
const bodyParser = require('bodyParser');
const cors = require('cors');

// import routes
const posts = require('./routes/posts');

// connection mysql
const connection = require('./config/database');

// models
const Post = require('./models/post');

const app = express();





connection.sync()
    .then(result => {

        app.listen(5000, () => console.log('Server ON'))
    })
    .catch((err) => {
        console.log('error: ', err)
    })