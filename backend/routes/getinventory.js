
const Inventory = require("../models/Inventory")
const connectDb = require("../middleware/mongoose")

const handler = async (req, res) =>{
    let inventories=await Inventory.find()
    return res.status(200).json({inventories})
}
module.exports = connectDb(handler)
