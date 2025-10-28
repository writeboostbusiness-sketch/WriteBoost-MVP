const express = require("express");
const router = express.Router();

router.post("/generate", (req,res)=>{
  // εδώ θα συνδέσεις με OpenAI API
  res.json({output:"Generated AI content"});
});

router.get("/history", (req,res)=>{
  res.json({history:[{ai_output:"Previous content"}]});
});

module.exports = router;
