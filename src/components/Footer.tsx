import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-contact">
          <h3 className="footer-heading">Connect With Us</h3>
          <p className="footer-text">
            For bespoke orders and custom arrangements, exclusively reach out via Instagram.
          </p>
          <a 
            href="https://instagram.com/kisha_bloomingart" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="insta-link"
          >
            @kisha_bloomingart
          </a>
        </div>
      </div>
      
      {/* Watermark container with overflow hidden to cut off bottom 30% */}
      <div className="watermark-container">
        <div className="watermark-text">KISHA</div>
      </div>
    </footer>
  );
}
