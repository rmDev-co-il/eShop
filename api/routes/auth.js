const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
// REGISTER 
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
        street: req.body.street,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err);
    }
})


// Login
// router.post("/login", async (req, res) => {
//     try {
//         const user = await User.findOne(
//             {
//                 username: req.body.username
//             });

//         !user && res.status(401).json("Wrong Username");

//         const passSecret = process.env.PASS_SEC;

//         const hashedPassword = CryptoJS.AES.decrypt(
//             user.password,
//             passSecret,
//         );

//         const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
//         const inputPassword = req.body.password;

//         originalPassword != inputPassword &&
//             res.status(401).json("Wrong Password")

//         const tokenSecret = process.env.JWT_SEC
//         const token = jwt.sign(
//             {
//                 id: user._id,
//                 isAdmin: user.isAdmin,
//             },
//             tokenSecret,
//             { expiresIn: "3d" }
//         );



//         const { password, ...others } = user._doc;
//         res.status(200).json({ ...others, token })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong credentials!");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
            res.status(401).json("Wrong credentials!");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "7d" }
        );

        console.log(accessToken + ' ACCESS TOKEN')

        const { password, ...others } = user._doc;
        // res.status(200).json({ ...others, accessToken });
        res.status(200).json({ ...others, accessToken })
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router