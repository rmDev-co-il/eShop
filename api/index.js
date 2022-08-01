const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe") // required for STRIPE payments
require("dotenv").config();
const cors = require("cors")
/// Database Connection 
mongoose.connect(process.env.DATABASE)
    .then(() => console.log("Database Connection Online"))
    .catch((err) => { console.log(err) })

/// Endpoints
app.use(cors()) // required for STRIPE
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)



/// Backend app port
app.listen(process.env.PORT, () => {
    console.log("Backend server is running on port " + `${process.env.PORT}`)
})