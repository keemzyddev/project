const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('./webpage'))

// app.get('/', (req, res) =>{
//  res.sendFile(path.resolve(__dirname, './webpage/index.html'))   
// })

app.all('*', (req, res, next) => {
    res.status(404).send('not found')
});
app.listen(5000, () =>{
    console.log('server is listening on port 5000...');
})