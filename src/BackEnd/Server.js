import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Emergency from '../models/EmergencyModel.js';
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
  const { name, phone, caseOfEmergency, addressOfPatient } = req.body;

  console.log("Request body:", req.body); // Log the request body

  const newEmergencyCase = new Emergency({
    name,
    phone,
    caseOfEmergency,
    addressOfPatient
  });

  try {
    await newEmergencyCase.save();
    console.log("Saved document:", newEmergencyCase); // Log the saved document
    res.status(201).send('Data saved');
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).send('Error saving data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
