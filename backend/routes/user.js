const express = require('express');
const router = express.Router();
const {
    requireSignin,
    adminMiddleware,
    authMiddleware
} = require('../controllers/auth.js');

const {read} = require('../controllers/user');

router.get('/profile', requireSignin, authMiddleware, read);


//test
// router.get('/secret', requireSignin, (req,res) => {
//     res.json({
//         message: req.user
//     });
// });

module.exports = router;