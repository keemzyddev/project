const authorize = require('./authorize')
const logger = require('./logger')
const morgan = require('morgan')

//app.use(logger, authorize)
app.use(morgan('tiny'))
app.get('/',(req,res) => {
    res.send('<h1>Home Page </h1>')
    console.log(req.user)
})

app.get('/about',(req,res) => {
    res.send('<h1>About </h1>')
})

app.get('/api/items', (req,res) => {
    res.send('list items')
})