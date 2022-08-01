const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        shortDesc: { type: String },
        img: { type: String, required: true },
        categories: { type: Array },
        tags: { type: Array },
        ram: { type: Array, },
        size: { type: Array },
        screenSize: { type: Array },
        color: { type: Array, },
        price: { type: Number, required: true },
        instock: { type: Boolean, default: true },

        // createdAt:Date.now()
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)