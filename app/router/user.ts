import express = require("express");
const router:express.Application = express();

router.post('/check',(req,res)=>{

    let tocken:string = req.body;


    res.send(JSON.stringify({}))

})


module.exports = router;