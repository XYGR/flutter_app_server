var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);
// var SessionStore = require('express-mysql-session')(session);
var config = require('./config');

var SessionStore = new MySQLStore(config.sessionStore);


module.exports = session({
    key:'flutter_app_key',
    secret: 'flutter_app_secret',
    resave:true,
    saveUninitialized: false,
    store: SessionStore,
    rolling:false,
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作 
        maxAge: 3600000 // 这一条 是控制 sessionID 的过期时间的！！！
    },
})
