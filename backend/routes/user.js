const express = require('express');
const router = express.Router();
const {
    requireSignin,
    adminMiddleware,
    authMiddleware
} = require('../controllers/auth.js');

const {
  read,
  publicProfile,
  update,
  photo,
  testupdatewiths3,
  listUsers,
  changeRole,
  removeUser,
  listRemovedUsers
} = require("../controllers/user");

router.get('/user/profile', requireSignin, authMiddleware, read);
router.get("/user/:username", publicProfile);
router.put("/user/update", requireSignin, authMiddleware, update);
router.put("/user/updatewiths3", requireSignin, authMiddleware, testupdatewiths3);
router.get("/user/photo/:username", photo);

router.get("/users/list", listUsers);
router.put("/users/changerole", requireSignin, adminMiddleware, changeRole);
router.put("/users/remove", requireSignin, adminMiddleware, removeUser);
router.get("/users/listremovedusers", listRemovedUsers);

module.exports = router;