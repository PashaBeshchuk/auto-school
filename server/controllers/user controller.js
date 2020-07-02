// const User = require('../models/user_shema_model');
// const SessionShema = require('../models/session_shema_model')
const { checkPassword } = require('../models/hash_models');
const {  createUser, getUser, getUserPassword } = require('../models/users_model');
const jsonwebtoken = require('jsonwebtoken');

exports.registrationNewUser = async (req, res, next) => {
    const userData = await getUser(req.body.email);
    if(userData) return res.send( {success: false} )
    const newUser = await createUser(req.body)
    res.send( {success: true} )      
}

exports.loginUser = async (req, res, next) => {
    let passwordCheckResult
    const user = await getUser(req.body.email);
    if(user) {
        const passwordUserDB = await getUserPassword(req.body.email)
        passwordCheckResult = checkPassword(req.body.password, passwordUserDB.password);
    }
    if(passwordCheckResult) {
        req.session.user = { email: user.email,auth: true }
        return res.send( {success: true, userData: user} )
    }
    res.send( {success: false} )
} 

exports.checkAuth = async (req, res, next) => {
    if(req.session.user && req.session.user.auth) {
        const user = await getUser(req.session.user.email);
        return res.send( {success: true, userData: user} )
    }
    res.send( {success: false} )
}

exports.logoutUser = (req, res, next) => {
    delete req.session.user
    if(!req.session.user) res.send( {success: true} )
}