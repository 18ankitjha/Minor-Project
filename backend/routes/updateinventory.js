
const Inventory = require("../models/Inventory")
const connectDb = require("../middleware/mongoose")
const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            
            let p = await Inventory.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ success: "Success" })
    } else {
        res.status(400).json({ error: "Invalid request method" })
    }
    
   
}

module.exports = connectDb(handler)
