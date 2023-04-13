const Inventory = require("../models/Inventory")
// import connectDb from "../middleware/mongoose"
const connectDb = require("../middleware/mongoose")
const handler = async (req, res) => {
    if(req.method=='DELETE'){
        let p=await Inventory.deleteOne({_id:req.body._id})
        res.status(200).json({success:"Success"})
    }else{
        res.status(400).json({error:"Invalid request method"})
    }

}
module.exports = connectDb(handler)