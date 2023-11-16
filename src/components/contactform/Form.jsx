// Form.js

import React from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

export default function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.number.value,
      message: e.target.elements.message.value,
    };

    console.log('Form Data:', formData);

    try {
      // Replace 'YOUR_USER_ID', 'YOUR_SERVICE_ID', and 'YOUR_TEMPLATE_ID' with your actual Email.js details
      await emailjs.send(
        'service_co8iwbj',
        'template_k8myg3a',
        formData,
        '4Kq5MEeG7PjA7gTUI'
      );

      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id='contact' className="section cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cta-item bg-white p-5 rounded">
              <h2 className="mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="john@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">Your Number</label>
                  <input type="number" className="form-control" id="number" name="number" placeholder="+917894561230" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" name="message" rows="4" placeholder="Write your message here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <p className="mt-3">Or contact us directly at:</p>
              <h3><i className="ti-mobile mr-3 text-color"></i>+91 90591 78744</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
