
const router = require('express').Router()
const User = require('../models/user')

const bcrypt = require('bcrypt')

// register API
router.post('/register', async (req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashPass   
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        res.status(500).send(err)
    }
})

module.exports = router