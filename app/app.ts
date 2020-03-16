import express = require('express');
import path = require("path");
import bodyParser = require("body-parser");
const app:express.Application=express();
const config = require('./config')

// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname,'static')));


// app.use(function(req,res){
//     const proxy:any = req.query.proxy;
//     if(proxy){
//         req.cookies = `req.header.cookie__proxy${proxy}`
//     }
// })

app.use('/doc',require('./router/index'));
app.use('/user',require('./router/user'));


app.listen(config.port,function(){
    console.log(`server runing @http://10.10.1.102:${config.port}!`);
})