const express = require('express');
const router = express.Router()

const ArticleServices = require('../services/ArticleServices');
const ArticleController = require('../controllers/ArticleController');

/**
 *  @description Root router
 *  @method GET /
 */
router.get('/', ArticleServices.articlesRoutes);

/**
 *  @description add articles
 *  @method GET /add-article
 */
router.get('/add-article', ArticleServices.add_article)

/**
 *  @description for update article
 *  @method GET /update-article
 */
router.get('/update-article', ArticleServices.update_article)


// APIs
router.post('/api/articles', ArticleController.create);
router.get('/api/articles', ArticleController.find);
router.put('/api/articles/:id', ArticleController.update);
router.delete('/api/articles/:id', ArticleController.delete);


module.exports = router