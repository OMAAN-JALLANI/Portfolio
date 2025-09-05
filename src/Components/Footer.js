import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faSquareWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react';
import '../App.css'; 

function Footer() {
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new window.bootstrap.Popover(popoverTriggerEl));
  }, []);

  return (
    <div>
      <footer >
        <nav className='footer' style={{ marginTop: '50px' }}>
          <ul>
            <li>
              <button type="button" className="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="omaan5167490">
                <FontAwesomeIcon icon={faInstagram} className="fa-instagram" />
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="@jallani36">
                <FontAwesomeIcon icon={faTiktok} className="fa-tiktok" />
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="+923265167490">
                <FontAwesomeIcon icon={faSquareWhatsapp} className="fa-square-whatsapp" />
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="https://github.com/OMAAN-JALLANI?tab=repositories">
                <FontAwesomeIcon icon={faGithub} className="fa-github" />
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="linkedin.com/in/omaan-mahmood-45b4a331a">
                <FontAwesomeIcon icon={faLinkedin} className="fa-linkedin" />
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
