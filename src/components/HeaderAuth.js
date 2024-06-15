import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const HeaderAuth = () => {
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.removeItem('userId');
        navigate('/login')
    }

    return (
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard">
                        <img className="nav__logo" src="../AjiNetfarjo.png" alt="" />
                    </Link>
                    <div className="navbar">
                        <form className="d-flex" role="search">
                            <button className="btn watchlistbtn text-white" onClick={() => navigate('/watchlist')}>Watch List</button>
                            <button className="btn signin-btn text-white" onClick={logout}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderAuth;