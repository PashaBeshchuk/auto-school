const express  = require('express');
const router = express.Router();
const { registrationNewUser, loginUser, checkAuth, logoutUser } = require('../controllers/user controller')


router.post('/registration', registrationNewUser)
router.post('/login', loginUser)
router.get('/auth', checkAuth)
router.get('/logout', logoutUser)
router.post('/new-client', logoutUser)





module.exports = router;