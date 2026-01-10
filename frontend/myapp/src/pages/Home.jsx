import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="hero text-center mb-4">
        <div className="container">
          <h1 className="display-6">Your Trusted Partner for Travel, Transport & Logistics</h1>
          <p className="lead">Taxi • Self-Drive • Bus & Train Tickets • Hotel Bookings • Tour Packages • Packers & Movers • Parcel Delivery</p>
          <Link to="/book" className="btn btn-light btn-lg">Book Now</Link>
        </div>
      </section>

      <section className="mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="p-4 card-custom">
              <h5>Taxi Services</h5>
              <p>Local, Outstation & Airport Drops with experienced drivers.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 card-custom">
              <h5>Self-Drive Cars</h5>
              <p>Daily / Weekly rentals — modern fleet & transparent pricing.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 card-custom">
              <h5>Packers & Movers</h5>
              <p>Reliable home & office shifting with insurance options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
