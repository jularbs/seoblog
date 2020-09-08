const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  signout,
  requireSignin,
  adminMiddleware,
} = require("../controllers/auth.js");

const {
    pendingUsers,
    acceptUser,
    declineUser
} = require("../controllers/user.js");

const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);
router.get("/registration/pendingusers", requireSignin, adminMiddleware, pendingUsers);
router.put("/registration/accept", requireSignin, adminMiddleware, acceptUser);
router.put("/registration/decline", requireSignin, adminMiddleware, declineUser);

module.exports = router;
