import mongoose from "mongoose";

// Define schema for Admin
const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,  // Ensure userName is provided
        unique: true      // Ensure userName is unique
    },
    password: {
        type: String,
        required: true  // Ensure password is provided
    }
}, {
    timestamps: true // Optional: Adds createdAt and updatedAt fields
});

// Create and export Admin model
const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
