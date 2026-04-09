import { Sparkles, Send, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container hero-split">
        
        <div className="hero-text-side">
          <div className="hero-badge animate-fade-in delay-1">
            <Sparkles size={14} className="sparkle-icon" />
            <span>Besoke Hampers & Florals</span>
          </div>
          
          <h1 className="hero-title animate-fade-in delay-2">
            The Art of<br />
            <span className="serif-italic">Elevating Moments.</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in delay-3">
            Every occasion deserves an unforgettable impression. Kisha crafts breathtaking, customized gift hampers and bouquets that transform celebrations into lasting memories.
          </p>
          
          <div className="hero-actions animate-fade-in delay-4">
            <a 
              href="https://instagram.com/kisha_bloomingart" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <span>DM to Order via Instagram</span>
              <Send size={18} />
            </a>
            
            <a href="#creations" className="btn-secondary">
              View Collections
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-side animate-fade-in delay-5">
          <div className="composition">
            {/* The overlapping polaroid style images */}
            <div className="comp-image comp-img-1">
              <img src="/assets/products/prod1.jpg" alt="Beautiful Hamper" />
            </div>
            <div className="comp-image comp-img-2">
              <img src="/assets/products/prod5.jpg" alt="Pink Bouquet" />
            </div>
            <div className="comp-image comp-img-3">
              <img src="/assets/products/prod3.jpg" alt="Luxury Gift Box" />
            </div>
            
            {/* Soft background glow for composition */}
            <div className="comp-glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
