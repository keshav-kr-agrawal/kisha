import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo">
          Kisha
        </a>
        <nav className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#creations" className="nav-link">Our Creations</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
