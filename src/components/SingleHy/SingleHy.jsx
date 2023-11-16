import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import img4 from '../../assets/img/hy3.jpg';
import img5 from '../../assets/img/wht2.jpeg';
import img6 from '../../assets/img/wht4.jpeg';
import Navprivacy from '../Navprivacy/Navprivacy';
import Footer from '../Footer/Footer';

const SingleHy = () => {
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
        <div>
            <Navprivacy />
            <div className='mt-5'>
                <h1 className='head-single'>Hydrebad</h1>
                <div className='ig'>
                    <img className='img-hy' src={img4} alt="Image 1" />
                </div>
                <h5 className='container dis-single'>Royal Pavilion is a splendid testimony to this great country’s regal past. It is a fitting tribute to the architectural style patronized by emperors of Rajasthan and comes adorned with intricate carvings, wide arches, beautiful Jharokha and jaalis, grand galleries, gorgeous gardens, alluring courtyards and stylish pavilions. It heralds a renaissance of classical Indian art and architecture for the coming generations to cherish and take pride in.

                    An epitome of classical elegance, the property is spread over 24 acres and offers 2, 3, and 4 Bed luxury apartments.</h5>
            </div>

            <div>
                <h1 className='head-single'>Plan. Hyderabad Apartment no2</h1>
                <div className='ig'>
                    <img src={img5} alt="Image 2" />
                </div>
            </div>

            <div className='cardaprt'>
                <h5>Apartment1</h5>
                <img src={img6} alt="Image 3" />
            </div>
            <div className='cardaprt'>
                <h5 className=' dis-single'>Apartment2</h5>
                <img src={img6} alt="Image 4" />
            </div>

            {/* Contact Form */}
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
            <Footer />
        </div>
    );
};

export default SingleHy;