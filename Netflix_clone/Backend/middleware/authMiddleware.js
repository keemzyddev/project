import jwt from "jsonwebtoken";

export const verify = async (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) res.status(403).json("Invalid Token")
            req.user = user;
            next()
        })
    } else {
        return res.status(401).json("You are not authenticated")
    }
}