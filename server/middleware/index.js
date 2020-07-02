const express = require('express')
const router = require('../routers')
const app = express()
const bodyParser = require('body-parser');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser('a39bPilot'))

app.use(session({
  key: 'auth',
  resave: true,
  rolling: true,
  saveUninitialized: false,
  secret: 'a4108b',
  store: new MongoStore({url: 'mongodb+srv://auto-school-name:autoscholl@cluster-auto-school-i5enn.mongodb.net/auto-school?auto-school=sessions'}),
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: null,
  },
}));
app.use(passport.initialize());
app.use(passport.session())




app.use((cli, res, next) => {
    res.setHeader('Allow', 'http://localhost:3000')
    res.setHeader("Content-Type", "application/json; charset=utf-8")
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', "true")
    
    next()
})


app.use(router)

module.exports = app