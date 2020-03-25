import express = require("express");
const router:express.Application = express();

router.get('/api',async(req,res) =>{

    let {sessionID,userName} = req.query;
    console.log(sessionID,userName)

    let data:any = {
        error:false,
        message:"success",
        data:[]
    }

    res.send(JSON.stringify(data))
})


module.exports = router