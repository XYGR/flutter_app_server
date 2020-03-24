var session = require('express-session')
var SessionStore = require('express-mysql-session')
var config = require('./config');

module.exports = session({
    key:'flutter_app_key',
    secret: 'flutter_app_secret',
    resave:true,
    saveUninitialized:false,
    store: new SessionStore(config.mysql.connection)
})
