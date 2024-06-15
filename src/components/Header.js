import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="../AjiNetfarjo.png" alt="" />
          </Link>
          <div className="navbar">
            <form className="d-flex" role="search">
              <button className="btn btn-warning text-white" onClick={login}>Login</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;