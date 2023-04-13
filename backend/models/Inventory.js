const mongoose = require('mongoose');
const InventorySchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Brand:{
        type:String
    },
    Description:{
        type:String,
        default:""
    },
    Quantity:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    user:{
        
    }
    


    
},{timestamps:true});
mongoose.models = {};
// export default mongoose.model(/'Inventory',InventorySchema);
module.exports = mongoose.model('Inventory',InventorySchema);