const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../modules/User'); // Adjust path if necessary
const router = express.Router();

// POST /api/register
router.post('/register', async (req, res) => {
  const { username, password, role, hospital } = req.body;

  // Validate inputs
  if (!username || !password || !role) {
    return res.status(400).json({ message: 'Username, password, and role are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      role,
      hospital: role === 'admin' ? hospital : null,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user: ' + error.message });
  }
});

module.exports = router;
