import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);

    Swal.fire("Thank you!", "Your request has been submitted. We will contact you soon!", "success");
    setContact({ name: '', phone: '', message: '' });
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Your Name</label>
          <input type="text" name="name" value={contact.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input type="text" name="phone" value={contact.phone} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col-12">
          <label className="form-label">What work do you need?</label>
          <textarea name="message" value={contact.message} onChange={handleChange} className="form-control" rows="4" required></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Send Request</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
