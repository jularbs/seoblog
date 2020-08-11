const express = require('express');
const router = express.Router();
const {create, list, read, update, remove, listAllCategoriesTags, photo} = require('../controllers/blog.js');
const {
    requireSignin,
    adminMiddleware
} = require('../controllers/auth.js');

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllCategoriesTags); //POST for pagination and param
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);
router.get('/blog/photo/:slug', photo);

module.exports = router;