
const Inventory = require("../models/Inventory")
// import connectDb from "../middleware/mongoose"
const connectDb = require("../middleware/mongoose")
const handler = async (req, res) => {
    console.log("Hello")
    
    console.log(req.body)
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            // console.log(req.body)
            let p = new Inventory({
                Name: req.body[i].Name,
                Category: req.body[i].Category,
                Brand: req.body[i].Brand,
                Description: req.body[i].Description,
                Quantity: req.body[i].Quantity,
                Price: req.body[i].Price,
                Status: req.body[i].Status,
                user: req.body[i].user
                // 

            })
            await p.save()
        }
        res.status(200).json({ success: "Success" })
    } else {
        res.status(400).json({ error: "Invalid request method" })
    }
    
    // res.status(200).json({ products })
}

module.exports = connectDb(handler)
