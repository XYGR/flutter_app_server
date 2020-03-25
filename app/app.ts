import express = require('express');
import path = require("path");
import bodyParser = require("body-parser");
const cors = require("cors");
const config = require('./config');
const session = require('./sessionStore');
const app:express.Application=express();


// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname,'static')));

app.use(session);
app.use(cors());


app.use('/doc',require('./router/index'));
app.use('/user',require('./router/user'));


app.listen(config.port,function(){
    console.log(`server runing @http://10.10.1.2:${config.port}`);
})