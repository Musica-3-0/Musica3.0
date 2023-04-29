const express = require("express");
const router = express.Router();

const { musicController } = require("../controller");

const { getMusic} =
  musicController;

router.get("/music", async (req, res) => {
  const music = await getMusic();
  res.send(music);
});

module.exports = router;