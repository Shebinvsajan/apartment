// Icon.js
import React from 'react';
import './Icon.css'; 
import '@fortawesome/fontawesome-free/css/all.css';

function Icon() {
  const whatsappNumber = "+919059178744";
  const phone = "+919059178744";
  const whatsappMessage = "Hello, ";

  const handleWhatsappClick = () => {
    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phone}`);
  };

  return (
    <div className="floating-icons">
      <div className="icon" onClick={handleWhatsappClick}>
        <i className="fab fa-whatsapp whatsapp" aria-hidden="true"></i>
      </div>
      <div className="icon-phone" onClick={handlePhoneClick}>
        <i className="fas fa-phone phone" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Icon;
