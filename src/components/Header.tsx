import { Send, Menu } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        
        <div className="header-left">
          <a href="/" className="logo">
            KISHA
          </a>
        </div>

        <nav className="header-nav">
          <a href="#about" className="nav-link">Our Story</a>
          <a href="#creations" className="nav-link">Creations</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="header-right">
          <a 
            href="https://instagram.com/kisha_bloomingart" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-order"
          >
            <Send size={16} />
            <span>DM to Order</span>
          </a>
          
          <button className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>

      </div>
    </header>
  );
}
