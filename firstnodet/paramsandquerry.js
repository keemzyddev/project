const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/' ,(req, res) =>{
     //res.json(products)
     res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products', (req, res) => {
    const newProduct = products.map((product)=>{
        const {id, name, image} = product
        return{id, name, image}
    })
    res.json(newProduct)
});
app.get('/api/products/:productId', (req, res) => {
    const {productId} =req.params
    const singleProduct = products.find((product)=> product.id === Number(productId))
    if(!singleProduct){
        return res.status(404).send('product does not exist')
    }
    res.json(singleProduct)

});
app.get('/api/v1/query', (req, res)=>{
    const {search, limit} = req.query
    let sortedProduct = [...products]

    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.name.startswith(search)
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if (sortedProduct.length < 1){
        res.status(200).send('no products matched')
    }
    res.status(200).json(sortedProduct)
    
})

app.listen(5000, () => {
    console.log(`Server started on port 5000...`);
});
