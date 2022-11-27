const express = require ("express");
const { User, Contact } = require ("../IndexModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
 
  try {
    const user = await User.create(req.body)
    const contact = await Contact.create(req.body.phone, userId)
    res.json({user, contact})
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
