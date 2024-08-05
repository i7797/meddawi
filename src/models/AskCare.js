import mongoose from "mongoose";

const askCare = new mongoose.Schema({
    paientName:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true,
    },
    healthCase:{
        type:String,
        require:true
    },
    noOfVisits:{
    type:Number,
    require:true
    },

    address:{
    type:String,
    require:true
    }
});

const dailyService = mongoose.model('dailyService' , askCare)

export default dailyService