import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Single.css';
import img4 from '../../assets/img/wht2.jpeg';
import img5 from '../../assets/img/wht4.jpeg';
import img6 from '../../assets/img/wht3.jpeg';
import Navprivacy from '../Navprivacy/Navprivacy';
import Footer from '../Footer/Footer';

const Single = () => {
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
                <h1 className='head-single'> Banglore</h1>
                <div className='ig'>
                    <img src={img4} alt="Image 1" />
                </div>
                <h5 className='container dis-single'>luxurious residential project located in the prime area off Thanisandra and Hennur ,North Bangalore. Spread over 6.5 acres of land, it boasts of world-class amenities and excellent connectivity to major parts of the city.

                    Location: Sobha Victoria Park is situated in Thanisandra, which is one of the most sought-after residential localities in North Bangalore. It enjoys proximity to major IT hubs such as Manyata Tech Park, Kirloskar Tech Park, and Karle Town Centre SEZ. Additionally, it is well-connected to the rest of the city through the Outer Ring Road and the International Airport Road. The area is also home to reputed educational institutions, hospitals, shopping malls, and entertainment centers.

                    Amenities: Sobha Victoria Park offers a range of world-class amenities that cater to the needs of modern-day living. It includes a well-equipped clubhouse, gymnasium, swimming pool, children's play area, landscaped gardens, and indoor/outdoor sports facilities. The project also boasts of 24/7 security, power backup, and ample parking space.</h5>
            </div>

            <div>
                <h1 className='head-single'>Plan. Hyderabad Apartment no2</h1>
                <div className='ig'>
                    <img src={img5} alt="Image 2" />
                </div>
                <h5 className='container  dis-single'>Rolling hills, graceful trees and elegantly built villas against the backdrop of Nandi Hills, Lifestyle Legacy seems like it comes to life from a painted masterpiece. Situated just minutes from Bangalore International Airport along the proposed 300 ft IVC Road, the property is set within 55 lush green acres. One glimpse of this cluster of presidential villas and you can't help but notice the artistry that went into creating such works of art. For we have spared no effort in giving you every luxury, every convenience and every comfort. Intricate detailing, thoughtful yet insightful little touches and a subtle class make Lifestyle Legacy a truly magnificent home. </h5>
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

export default Single;