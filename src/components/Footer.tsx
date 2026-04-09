import { Send, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-top">
        
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <h3 className="footer-logo">KISHA</h3>
            <p className="footer-desc">
              Curating emotions through bespoke floral arrangements and customized gift hampers for those who appreciate the extraordinary.
            </p>
          </div>

          <div className="footer-col links-col">
            <h4 className="footer-title">Explore</h4>
            <nav className="footer-nav">
              <a href="#about">Our Story</a>
              <a href="#creations">Collections</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-col action-col">
            <h4 className="footer-title">Connect</h4>
            <p className="footer-desc action-desc">
              Ready to elevate your next celebration?
            </p>
            <a 
              href="https://instagram.com/kisha_bloomingart" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-btn"
            >
              <Send size={18} />
              <span>DM to Order</span>
              <ArrowUpRight size={16} className="arrow-icon" />
            </a>
          </div>

        </div>
      </div>
      
      {/* Watermark container with overflow hidden to cut off bottom 30% */}
      <div className="watermark-container">
        <div className="watermark-text">KISHA</div>
      </div>
    </footer>
  );
}
