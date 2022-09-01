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
    createAt: {
        type: Date,
        immutable: true,
        default: () => new Date()
    },
    updateAt: {
        type: Date,
        default: () => new Date()
    },
    imgUrl : String,
    status : String,
    image : String
})

// Middleware before save model function
articleSchema.pre('save', function (next) {
    this.updateAt = new Date()
    next()
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;