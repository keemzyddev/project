const express = require('express')
const router = express.Router()
const members = require('../../members')
const uuid = require('uuid')

router.get('/', (req, res) =>res.json(members))

router.get('/:id', (req, res)=>{
    const found = members.some(member => member.id === Number(req.params.id))

    if (found){
        res.json(members.filter(member => member.id === Number(req.params.id)));
    }
    else {
        res.status(400).json({msg: 'no member with the id'})
    }
})
router.post('/', (req, res)=>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email

    }
    if(!newMember.name || !newMember.email){
      return res.status(400).json({msg:'please include name and email '})
    }
    members.push(newMember)
     res.json(members);
})

router.put('/:id', (req, res)=>{
    const found = members.some(member => member.id === Number(req.params.id))

    if (found){
        const updMember = req.body;
        members.forEach(member => {
     if (member.id === Number(req.params.id)){
        member.name = updMember.name? updMember.name : member.name
        member.email = updMember.email? updMember.email : member.email 
        res.json({msg:`member updated`, member})
    }
        });
    }
     else {
        res.status(400).json({msg: 'no member with the id'})
    }
})
router.delete('/:id', (req, res)=>{
    const found = members.some(member => member.id === Number(req.params.id))

    if (found) {
        res.json({
            msg:'member deleted', 
        members: members.filter(member => member.id !== Number(req.params.id))
    })
    }
    else {
        res.status(400).json({msg: 'no member with the id'})
    }
})
module.exports = router