const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
   res.json({
    data: "Express app",
    message: "Testing vercel deployment"
})
})

module.exports = router;