import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Emergency from '../models/EmergencyModel.js';
import dailyService from '../models/AskCare.js';
const app = express();
const port = 5002;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Mdaweii', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Emergency post data
app.post('/api/emergency', async (req, res) => {
  const { name, phone, caseOfEmergency  , addressOfPatient } = req.body;

  const newEmergencyCase = new Emergency({
    name,
    phone,
    caseOfEmergency,
    addressOfPatient
  });

  try {
    await newEmergencyCase.save();
    res.status(201).send('Data saved');
  } catch (err) {
    res.status(500).send('Error saving data');
  }
});

//daily service post data
app.post('/api/service', async (req, res) => {
  const { paientName, phone, healthCase, noOfVisits , address } = req.body;
  const newServiceRequest = new dailyService({
    paientName,
    phone,
    healthCase,
    noOfVisits,
    address
  });

  try {
    await newServiceRequest.save();
    res.status(201).send('Data saved');
  } catch (e) {
    console.error('Error saving request', e);
    res.status(500).send('Error saving data');
  }
});

//fetch data of daily services 
app.get('/api/dashboard',(req,res)=>{
  dailyService.find()
  .then(service => res.json(service))
  .catch(err =>res.json(err))
})

//fetch emergency data

app.get('/api/dashboard',(req,res)=>{
  Emergency.find()
  .then(cases => res.json(cases))
  .catch(err =>res.json(err))
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
