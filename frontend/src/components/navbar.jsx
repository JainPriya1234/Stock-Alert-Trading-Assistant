export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <div className="brand-dot" />
          <h1 className="brand-title">Stock Alerting</h1>
        </div>

        <div className="nav-links">
          {/* add your links here */}
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link">Alerts</a>
          <a href="#" className="nav-link">Pricing</a>
        </div>

        <div className="nav-actions">
          <button className="nav-button">Login</button>
          <button className="nav-button primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}