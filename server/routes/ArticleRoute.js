const express = require('express');
const router = express.Router()

const upload = require('../services/uploadImg')

const ArticleServices = require('../services/ArticleServices');
const ArticleController = require('../controllers/ArticleController');

router.get('/', ArticleServices.articlesRoutes);

router.get('/table', ArticleServices.articlesTable);

router.get('/add-article', ArticleServices.add_article)

router.get('/update-article', ArticleServices.update_article)

router.get('/details', ArticleServices.showArticle)


// APIs
router.post('/', upload.single('image'), ArticleController.create);
router.get('/get-data', ArticleController.find);
router.put('/:id', ArticleController.update);
router.delete('/:id', ArticleController.delete);


module.exports = router