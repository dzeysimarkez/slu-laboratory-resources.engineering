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
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
  },
  contactNumber: {
    type: String
  }
});

// Prevent model overwrite upon hot-reload in dev or serverless
export default mongoose.models.User || mongoose.model('User', UserSchema);
