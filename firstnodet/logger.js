const logger = (req, res, next) =>{
    const a = 1
    const b = 3
    const c = b - a
    console.log(c)
    next()
}

module.exports = logger
