const express = require('express');
const app = express();

//const path = require('path')
//const members =  require('./members');
//const logger =  require('./middleware1');

app.use(express.json())
app.use(express.urlencoded({extended:false})) 

//app.use(express.static(path.join(__dirname, 'node_express')))

app.use('/api/members', require('./routes/api/member_routes'))
//app.use(logger)

 app.listen(5000, ()=> console.log('server listening at port 5000'));