// routes/bookings.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create booking
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, service_id, pickup, dropoff, date, notes, referrer } = req.body;
    if (!name || !phone || !service_id) {
      return res.status(400).json({ error: 'name, phone and service_id are required' });
    }
    const [result] = await db.query(
      `INSERT INTO bookings (name, phone, email, service_id, pickup, dropoff, date, notes, referrer)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, phone, email || null, service_id, pickup || null, dropoff || null, date || null, notes || null, referrer || null]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// List bookings (paginated)
router.get('/', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page || '1', 10));
    const perPage = Math.min(100, parseInt(req.query.perPage || '20', 10));
    const offset = (page - 1) * perPage;
    const [rows] = await db.query(
      `SELECT b.*, s.title as service_title
       FROM bookings b
       LEFT JOIN services s ON b.service_id = s.id
       ORDER BY b.created_at DESC
       LIMIT ? OFFSET ?`,
      [perPage, offset]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

module.exports = router;
