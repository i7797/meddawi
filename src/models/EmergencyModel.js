import mongoose from "mongoose";

const EmergencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  caseOfEmergency: {
    type: String,
    required: true
  },
  addressOfPatient: {
    type: String,
    required: true
  }
});

const Emergency = mongoose.model('emergencyCases', EmergencySchema);

export default Emergency;
