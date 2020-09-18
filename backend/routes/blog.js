const express = require('express');
const router = express.Router();
const {
  create,
  list,
  read,
  update,
  remove,
  listAllCategoriesTags,
  photo,
  listRelated,
  listSearch,
  listByUser,
  uploadImage
} = require("../controllers/blog.js");
const {
    requireSignin,
    adminMiddleware,
    authMiddleware,
    canUpdateDeleteBlog
} = require('../controllers/auth.js');

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllCategoriesTags); //POST for pagination and param
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);
router.get('/blog/photo/:slug', photo);
router.post('/blogs/related', listRelated);
router.get("/blogs/search", listSearch);

//for auth user blog crud
router.post("/user/blog", requireSignin, authMiddleware, create);
router.delete("/user/blog/:slug", requireSignin, authMiddleware, canUpdateDeleteBlog, remove);
router.put("/user/blog/:slug", requireSignin, authMiddleware, canUpdateDeleteBlog, update);
router.get("/:username/blogs", listByUser);

// for image handler

router.post("/blog/uploadimage", requireSignin, adminMiddleware, uploadImage);
router.post("/user/uploadimage", requireSignin, authMiddleware, uploadImage);

module.exports = router;