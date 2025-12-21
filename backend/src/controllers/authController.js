const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
  try {
    console.log('Registration request:', req.body);
    const { phone, password, name } = req.body;
    
    if (!phone || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Validate phone format (07xxxxxxxx)
    if (!/^07\d{8}$/.test(phone)) {
      return res.status(400).json({ message: 'Phone must be in format 07xxxxxxxx' });
    }
    
    // Validate 4-digit password
    if (!/^\d{4}$/.test(password)) {
      return res.status(400).json({ message: 'Password must be exactly 4 digits' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashed successfully');
    
    const userId = await User.create({ phone, password: hashedPassword, name });
    console.log('User created with ID:', userId);
    
    if (!process.env.JWT_SECRET) {
      console.error('Missing JWT_SECRET - cannot generate token');
      return res.status(500).json({ message: 'Server misconfigured: JWT_SECRET missing' });
    }
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    console.log('Token generated successfully');
    
    res.status(201).json({ token, user: { id: userId, phone, name } });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findByPhone(phone);
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    if (!process.env.JWT_SECRET) {
      console.error('Missing JWT_SECRET - cannot generate token');
      return res.status(500).json({ message: 'Server misconfigured: JWT_SECRET missing' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user.id, phone: user.phone, name: user.name } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { register, login };