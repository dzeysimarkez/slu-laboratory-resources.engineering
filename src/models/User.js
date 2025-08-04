// const mongoose = require('mongoose');

// // Define schema for User
// const UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model('User', UserSchema);
// models/user.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Prevent model overwrite upon hot-reload in dev or serverless
export default mongoose.models.User || mongoose.model('User', UserSchema);
