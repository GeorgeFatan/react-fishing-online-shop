import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Fishing Shop Romania
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home Page
          </Link>
          <Link to="/checkout" className="navbar-link">
            Cos
          </Link>
        </div>

        {/* Dacă userul NU este logat */}
        {!token && (
          <div className="navbar-auth">
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        )}

        {/* Dacă userul ESTE logat */}
        {token && (
          <div className="navbar-auth">
            <span className="nav-user">Hello!</span>
            <button
              className="btn btn-secondary"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
