import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in delay-1">
          <p className="hero-pretitle">The Art of Gifting</p>
          <h1 className="hero-title">
            Exceptional <br/>
            <span className="text-gradient">Customized Hampers</span>
            <br/> & Bouquets
          </h1>
          <p className="hero-subtitle animate-fade-in delay-2">
             Curated by Kisha. Elevate every occasion, festival, and birthday with bespoke creations designed to leave a lasting impression.
          </p>
          <a href="#creations" className="hero-cta animate-fade-in delay-3">
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}
