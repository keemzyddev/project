const logger =  (req, res, next) =>{
    console.log(Date())
    next()
}
module.exports = logger;