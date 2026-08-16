import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { user, logOut } =
    useContext(AuthContext); /* returnam signUp, user, logOut, logIn*/

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
          <Link to="Checkout" className="navbar-link">
            Cos
          </Link>
        </div>

        {/* if user is not loged in => whe show login and register buttons*/}

        {!user && (
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

        {/* if user is loged in => we show hello, user.email*/}
        {user && (
          <div className="navbar-auth">
            <span className="nav-user">Hello, {user.email}</span>
            <button className="btn btn-secondary" onClick={logOut}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
