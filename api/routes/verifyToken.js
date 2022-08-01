const jwt = require("jsonwebtoken")
require("dotenv").config();


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    console.log(authHeader + " this is const")
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        console.log(token + " THIS IS TOKEN - authHeader.split")
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) { res.status(403).json("Token is not valid") }
            else {
                req.user = user
                next();
            }
        })
    } else {
        res.status(401).json("no auth");
        console.log(authHeader + "<- authHeader on ERROR and res.headers -> " + res.headers)
    }
}

const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id == req.params.id || req.user.isAdmin) {
            next()
        } else {
            return res.status(403).json("You are not allowed to do that!")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json("You dont have admin rights")
        }
    })
}


module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin }