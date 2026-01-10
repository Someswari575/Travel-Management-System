// routes/contacts.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    if (!name || !phone) return res.status(400).json({ error: 'name and phone are required' });
    const [result] = await db.query(
      'INSERT INTO contacts (name, phone, email, message) VALUES (?, ?, ?, ?)',
      [name, phone, email || null, message || null]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

module.exports = router;
