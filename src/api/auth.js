import connectToDatabase from './utils/db.js';
import User from './models/User.js';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    await connectToDatabase();

    // Check if user exists
    const user = await User.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Success
    return res.status(200).json({ msg: 'Login successful' });

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: 'Server error' });
  }
}
