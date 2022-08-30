const mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true,
        unique: true
    },
    author : {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    },
    imgUrl : String,
    status : String,
    image : String
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;