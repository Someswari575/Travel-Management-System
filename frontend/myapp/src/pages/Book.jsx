import React, { useEffect, useState } from 'react';
import API from '../api';

export default function Book() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service_id: '', pickup: '', dropoff: '', date: '', notes: '', referrer: ''
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    API.get('/services').then(r => setServices(r.data)).catch(console.error);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service_id) {
      setStatus({ ok: false, msg: 'Name, Phone and Service are required' });
      return;
    }
    try {
      const res = await API.post('/bookings', form);
      setStatus({ ok: true, id: res.data.id });
      setForm({ name: '', phone: '', email: '', service_id: '', pickup: '', dropoff: '', date: '', notes: '', referrer: '' });
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, msg: 'Submission failed' });
    }
  };

  return (
    <div>
      <h2 className="mb-3">Book a Service</h2>
      <form onSubmit={handleSubmit} className="card-custom p-3">
        <div className="mb-2">
          <label className="form-label">Name *</label>
          <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-2">
          <label className="form-label">Phone *</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="form-control" />
        </div>

        <div className="mb-2">
          <label className="form-label">Service *</label>
          <select name="service_id" value={form.service_id} onChange={handleChange} className="form-select" required>
            <option value="">Select service</option>
            {services.map(s => <option value={s.id} key={s.id}>{s.title}</option>)}
          </select>
        </div>

        <div className="mb-2 row">
          <div className="col">
            <label className="form-label">Pickup</label>
            <input name="pickup" value={form.pickup} onChange={handleChange} className="form-control" />
          </div>
          <div className="col">
            <label className="form-label">Dropoff</label>
            <input name="dropoff" value={form.dropoff} onChange={handleChange} className="form-control" />
          </div>
        </div>

        <div className="mb-2">
          <label className="form-label">Date & Time</label>
          <input name="date" value={form.date} onChange={handleChange} type="datetime-local" className="form-control" />
        </div>

        <div className="mb-2">
          <label className="form-label">Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} className="form-control" rows="2" />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary" type="submit">Submit Booking</button>
          <button type="button" className="btn btn-secondary" onClick={() => { setForm({ name: '', phone: '', email: '', service_id: '', pickup: '', dropoff: '', date: '', notes: '', referrer: '' }); setStatus(null); }}>Reset</button>
        </div>

        {status && (
          <div className={`mt-3 alert ${status.ok ? 'alert-success' : 'alert-danger'}`} role="alert">
            {status.ok ? `Booking created — ID ${status.id}` : status.msg}
          </div>
        )}
      </form>
    </div>
  );
}
