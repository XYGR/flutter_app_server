import express = require("express");
const mysql = require('../mysql');
const router:express.Application = express();

router.get('/api',async(req,res) =>{


    let data:object = {
        code:0,
        message:"success",
        data:[]
    }
    console.log(req.query)
    // console.log();
    console.log(await mysql.select().table('user_tab'));


    res.send(JSON.stringify(data))
})


module.exports = router