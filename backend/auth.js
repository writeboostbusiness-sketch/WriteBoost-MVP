const express = require("express");
const router = express.Router();

router.post("/signup", (req,res)=>{
  // εδώ θα προσθέσεις λογική για signup
  res.json({message:"Signup success"});
});

router.post("/login", (req,res)=>{
  // εδώ θα προσθέσεις λογική για login
  res.json({token:"dummy-token", user:{name:"Test User"}});
});

module.exports = router;
