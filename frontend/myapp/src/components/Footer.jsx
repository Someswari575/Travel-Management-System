import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-4">
      <div className="container container-800 text-center">
        <div>© {new Date().getFullYear()} Annapurna Travels & Transport - Vizag</div>
        <div className="small">Trusted Partner for Travel, Transport & Logistics — Taxi • Self-Drive • Bus • Train • Hotels • Packers & Movers • Parcel Delivery</div>
      </div>
    </footer>
  );
}
