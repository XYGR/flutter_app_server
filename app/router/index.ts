import express = require("express");
const router:express.Application = express();

router.get('/api',function(req,res){

    let data:object = {
        code:0,
        message:"success",
        data:[]
    }

    res.send(JSON.stringify(data))
})


module.exports = router