const axios = require('axios');


exports.articlesRoutes = (req, res) => {
    // Make a get request to /api/articles
    axios.get('http://localhost:3000/api/articles')
        .then((response) => {
            res.render('index', {
                articles: response.data
            });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_article = (req, res) => {
    res.render('add_article');
}

exports.update_article = (req, res) => {
    axios.get('http://localhost:3000/api/articles', {
            params: {
                id: req.query.id
            }
        })
        .then(function (articledata) {
            res.render("update_article", {
                article: articledata.data
            })
        })
        .catch(err => {
            res.send(err);
        })
}