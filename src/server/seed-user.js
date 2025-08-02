const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

async function seedUser() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const hashedPassword = await bcrypt.hash('!Adm1n-P@$$w0rd#', 10);
  const newUser = new User({
    email: 'admin@admin',
    password: hashedPassword,
  });

  await newUser.save();
  console.log('✅ User created successfully');
  process.exit();
}

seedUser();
