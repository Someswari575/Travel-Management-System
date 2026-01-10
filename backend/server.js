// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();

const servicesRouter = require('./routes/services');
const bookingsRouter = require('./routes/bookings');
const contactsRouter = require('./routes/contacts');

const app = express();
app.use(cors());
app.use(express.json());

// rate limiter
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 200 });
app.use(limiter);

// routes
app.use('/api/services', servicesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/contacts', contactsRouter);

// health
app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date() }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
