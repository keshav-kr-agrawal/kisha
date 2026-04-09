import './Gallery.css';

export default function Gallery() {
  // We have exactly 24 images named prod1.jpg to prod24.jpg 
  const products = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <section className="gallery section" id="creations">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">Our Creations</h2>
          <p className="section-subtitle">
            Explore our meticulously crafted collection of bespoke gift hampers and floral arrangements.
          </p>
        </div>

        <div className="gallery-grid">
          {products.map((num) => (
            <div className={`gallery-item item-${num}`} key={num}>
              <div className="gallery-image-wrapper">
                <img 
                  src={`/assets/products/prod${num}.jpg`} 
                  alt={`Kisha Blooming Art Creation ${num}`} 
                  loading="lazy" 
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <span className="gallery-overlay-text">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
