import './Contact.css'; // Import the CSS file

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-component">
        <div className="contact-header">
          <div className="flex items-center">
            <img
              src="https://ugc.production.linktr.ee/J9QUI87RsK7D2JxKG73g_GNnI0QCR2WqzoQvb?io=true&size=avatar-v3_0"
              alt="Eklavya India Foundation"
              className="contact-logo"
            />
            <div className="ml-4 contact-title">
              <h2>Eklavya India Foundation</h2>
              <p>Promoting Higher Education & Enabling Grassroots Leadership</p>
            </div>
          </div>
        </div>
        <div className="contact-icons">
          <a href="https://www.facebook.com/EklavyaIndiaFoundation" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="contact-icon" />
          </a>
          <a href="https://www.instagram.com/eklavyaindiafoundation" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="contact-icon" />
          </a>
          <a href="https://www.youtube.com/@EklavyaIndiaFoundation" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="contact-icon" />
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team@eklavyaindia.org" target="_blank" rel="noopener noreferrer">
            <IoIosMailOpen className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/company/eklavyaindiafoundation/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin className="contact-icon" />
          </a>
          <a href="https://t.me/iameklavya" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="contact-icon" />
          </a>
          <a href="https://x.com/eklavya_india" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="contact-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;