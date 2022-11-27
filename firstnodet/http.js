const http = require ('http')
const {readFileSync} =  require('fs')


const homePage = readFileSync('./webpage/index.html')
const homestyle = readFileSync('./webpage/mystyle.css')
const aboutPage = readFileSync('./webpage/about.html')

const server = http.createServer((req, res)=>{


const url =  req.url

if (req.url === '/' ){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(homePage)
    res.end()
}
else if (req.url === '/about' ){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(aboutPage)
    res.end()
}
else if (req.url === '/mystyle.css' ){
    res.writeHead(200, {'Content-Type': 'text  /css'})
    res.write(homestyle)
    res.end()
}
else {
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write('<h1> 404 Not Found </h1>')
    res.end()
}
})
port = process.env.port ||5000

server.listen(5000, () =>{
    console.log(`server listening on port: ${port}`)
})



// const server = http.createServer((req, res) => {
// if(req.url === '/'){
//   res.end('home page')
// }
// if(req.url === '/about'){
//   res.end('about page')
// }

// res.end('Error Page')
// })

// server.listen(5000, () =>{
//   console.log('server listening on port 5000...')
// })
