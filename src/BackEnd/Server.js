import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const server = express()
const PORT = 3002

//contect to database

mongoose.connect("mongodb://localhost:27017/EmergencyDatabase" , { useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log("Database connected"))
.catch((e)=>console.log("Database Error :" , e))

//define schema
const emergencyShema = new mongoose.Schema({
name: String,
phone: Number,
emergencyCase: String

})

//creat model 

const EmergencyCaseModel = mongoose.model("EmergencyCase" , emergencyShema)

//middelware
server.use(express.json());
server.use(cors());
 
//Define  to post rout

server.post("/api/EmergencyTable" , async(req , res)=>{
    const {name , phone , emergencyCase} = req.body;
    const newEmergencyInput = new EmergencyCaseModel({
        name ,
        phone,
        emergencyCase
    })
    try{
        await newEmergencyInput.save()
        res.status(200).send("case added")

    }
    catch(e){
        res.status(500).send("error add data")
    }
})

//start server

server.listen(PORT , ()=>{
    console.log(`server run on port ${PORT}`)
})