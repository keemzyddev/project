const express = require('express'); 
const http = require('http'); 
const app = express();

app.use(express.static('./firstnodet/node_express101'));

app.all('*', (req, res) =>{
    res.status(404).send('<h1> Page Not Found</h1>')
})
app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});
