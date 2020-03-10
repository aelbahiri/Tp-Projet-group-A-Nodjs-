const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// import routes
const posts = require('./routes/posts');
const users = require('./routes/users');

// connection mysql
const connection = require('./config/database');

// models
const Post = require('./models/post');
const Comment = require('./models/comment');
const Category = require('./models/category');
const Type = require('./models/type');

const User = require('./models/user');
const Tag = require('./models/tag');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(users)

User.belongsTo(Type);
Type.hasMany(User);

Comment.belongsTo(User);
User.hasMany(Comment);

Post.belongsTo(User);
User.hasMany(Post);


Comment.belongsTo(Post);
Post.hasMany(Comment);

Post.belongsTo(Category);
Category.hasMany(Post);

Post.belongsToMany(Tag,{ through: 'tag_post'} );
Tag.belongsToMany(Post,{ through: 'tag_post'} );


connection.sync({force:true})
    .then(result => {

        app.listen(5000, () => console.log('Server ON'))
    })
    .catch((err) => {
        console.log('error: ', err)
    })
