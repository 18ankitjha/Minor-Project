
const Inventory = require("../models/Inventory")
// import connectDb from "../middleware/mongoose"
const connectDb = require("../middleware/mongoose")
const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            // console.log(req.body)
            let p = await Inventory.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ success: "Success" })
    } else {
        res.status(400).json({ error: "Invalid request method" })
    }
    
    // res.status(200).json({ products })
}

module.exports = connectDb(handler)
// {
// "_id": "64383a074f7003487ec66be3",
//      "Name": "Test",
//      "Category": "Test",
//      "Brand": "Test",
//      "Description": "Test",
//      "Quantity": 1,
//      "Price": 1,
//      "Status": "Test",
//      "user": "Test"
//}