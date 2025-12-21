const express = require('express');
const router = express.Router();
const { initDatabase } = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

// Get current user's investments
router.get('/', authenticateToken, async (req, res) => {
  try {
    const db = await initDatabase();
    const userId = req.userId;
    const investments = await db.all('SELECT id, plan, amount, status, created_at FROM investments WHERE user_id = ?', [userId]);
    res.json({ investments });
  } catch (err) {
    console.error('Error fetching investments', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new investment - deducts from user balance and records transaction
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { plan, amount } = req.body;
    const investAmount = Number(amount);
    if (!plan || !investAmount || investAmount <= 0) {
      return res.status(400).json({ message: 'Invalid plan or amount' });
    }

    const db = await initDatabase();
    const user = await db.get('SELECT id, balance, phone_number FROM users WHERE id = ?', [req.userId]);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.balance < investAmount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // Deduct balance
    const newBalance = user.balance - investAmount;
    await db.run('UPDATE users SET balance = ? WHERE id = ?', [newBalance, user.id]);

    // Insert investment
    const result = await db.run('INSERT INTO investments (user_id, plan, amount, status) VALUES (?, ?, ?, ?)', [user.id, plan, investAmount, 'active']);
    const investmentId = result.lastID;

    // Record a transaction for audit
    const txnId = `INV_${user.id}_${Date.now()}`;
    await db.run(
      'INSERT INTO transactions (user_id, transaction_id, phone_number, amount, type, status) VALUES (?, ?, ?, ?, ?, ?)',
      [user.id, txnId, user.phone_number, investAmount, 'investment', 'completed']
    );

    const investment = await db.get('SELECT id, plan, amount, status, created_at FROM investments WHERE id = ?', [investmentId]);
    res.status(201).json({ investment, balance: newBalance });
  } catch (err) {
    console.error('Error creating investment', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
