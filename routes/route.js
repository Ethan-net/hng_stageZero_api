const express = require("express");

router = express.Router();

const dateTime = new Date().toISOString();

router.get("/mydata", (req, res) => {
  res.status(200).json({
    email: "koredeajibola@gmail.com",
    current_datetime: `${dateTime}`,
    github_url: "https://github.com/Ethan-net/hng_stageZero_api",
  });
});

module.exports = router;
