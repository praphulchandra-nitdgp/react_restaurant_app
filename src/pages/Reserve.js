import React, { useState } from 'react';
import './Reserve.css';

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending the data to a server
    console.log('Reservation Details:', formData);
    setSubmitted(true);
  };

  return (
    <section className="reservation-container">
      <h2>Make a Reservation</h2>
      {submitted ? (
        <div className="confirmation-message">
          <h3>Thank you for your reservation!</h3>
          <p>We look forward to seeing you on {formData.date} at {formData.time}.</p>
        </div>
      ) : (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder='Your Email' value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder='Mobile Contact' value={formData.phone} onChange={handleChange} required />
            <input type="date" name="date" placeholder='Date' value={formData.date} onChange={handleChange} required />
            <input type="time" name="time" placeholder='At What Time?' value={formData.time} onChange={handleChange} required />
            <input type="number" name="guests" placeholder='No. of Guest' value={formData.guests} onChange={handleChange} required min="1" />
            <textarea name="specialRequests" placeholder='Any Special Request?' value={formData.specialRequests} onChange={handleChange}></textarea>
            <div className='rs-btn'>
                <button type="submit">Reserve</button>
            </div>
        </form>
      )}
    </section>
  );
};

export default Reserve;
