import React, { useEffect, useState } from 'react';
import API from '../api';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.get('/services').then(r => setServices(r.data)).catch(err => console.error(err));
  }, []);

  if (!services.length) return <div className="text-center py-4">Loading services...</div>;

  return (
    <div>
      <h2 className="mb-3">Our Services</h2>
      <div className="row g-3">
        {services.map(s => (
          <div key={s.id} className="col-md-4">
            <div className="p-3 card-custom">
              <h5>{s.title}</h5>
              <p>{s.description}</p>
              {s.price ? <div className="text-muted">Base price: ₹{s.price}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
