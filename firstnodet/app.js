const express = require('express');
const axios = require('axios');
const app = express();
let { people } = require('./data')

app.use(express.static('./methods-page'))
app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req, res)=>{
//res.status(200).json({success: true, data: people})
res.json(people)
})

// app.post('/api/people', (req, res)=>{
//     res.status(201).send('success')
// })
app.post('/login',(req,res)=>{
    const {name} = req.body
    if (name){
    return res.status(200).send(`welcome: ${name}`);
    }
    res.status(400).send('enter name')
})
app.post('/api/postman/people', (req, res) =>{
    const {name} = req.bodyi
    if (!name) {
        return res.status(400).json({success:true, msg:`please provide name value`})
    }
})
app.listen(5000, () => {
    console.log(`Server started on port 5000...`);
});