const express = require ("express");
const {User} = require ("../IndexModel");
const Contact = require ("../IndexModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body
  try {
    const user = await User.create({name})
    res.json(user)
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
