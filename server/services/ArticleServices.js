const axios = require('axios');

exports.articlesRoutes = (req, res) => {
    // Make a get request to /api/articles
    // const fullUrl =  req.protocol + '://' + req.get('host') + req.originalUrl;
    const fullUrl = req.protocol + '://' + req.get('host');
    axios.get(`${fullUrl}/articles/get-data`)
        .then((response) => {
            res.render('articles', {
                articles: response.data
            });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.articlesTable = (req, res) => {
    const fullUrl = req.protocol + '://' + req.get('host');
    axios.get(`${fullUrl}/articles/get-data`)
        .then((response) => {
            res.render('articles/table', {
                articles: response.data
            });
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_article = (req, res) => {
    res.render('articles/add_article');
}

exports.update_article = (req, res) => {
    axios.get('http://localhost:3000/articles/', {
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

exports.showArticle = (req, res) => {
    // Make a get request to /api/articles
    const fullUrl = req.protocol + '://' + req.get('host');
    axios.get(`${fullUrl}/articles/get-data?id=${req.query.id}`)
        .then((response) => {
            res.render('articles/details', {
                article: response.data
            });
        })
        .catch(err => {
            res.send(err);
        })

}