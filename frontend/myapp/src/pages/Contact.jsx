import React, { useState } from 'react';
import API from '../api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.phone) { setStatus({ ok: false, msg: 'Name and Phone required' }); return; }
    try {
      const res = await API.post('/contacts', form);
      setStatus({ ok: true, id: res.data.id });
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, msg: 'Submission failed' });
    }
  };

  return (
    <div>
      <h2 className="mb-3">Contact / Refer & Earn</h2>
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
          <label className="form-label">Message / Refer details</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="3"></textarea>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-success" type="submit">Send</button>
          <button type="button" className="btn btn-secondary" onClick={() => setForm({ name: '', phone: '', email: '', message: '' })}>Reset</button>
        </div>

        {status && <div className={`mt-3 alert ${status.ok ? 'alert-success' : 'alert-danger'}`}>{status.ok ? `Thanks — we'll contact you (id ${status.id})` : status.msg}</div>}
      </form>
    </div>
  );
}
