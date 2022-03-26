import React, { useRef, useState } from 'react';
import './Authenticated.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const AuthenticatedNavbar = () => {
    const activeClassName = "nav__item__link nav__item__link--active"
    const inActiveClassName = "nav__item__link"
    const checkIsActive = (props) => props.isActive ? activeClassName : inActiveClassName
     
    const inputRef = useRef(null)
    const handleClick = () => {
        const el = inputRef.current;
        el.className = "navbar__search__input--active"
    }
    const [authenticated, setAuthenticated] = useState('TV Show')
    const [user, setUser] = useState('Log in')

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/auth/login`; 
        localStorage.getItem('token') ? <AuthenticatedNavbar />  : navigate(path)
    }

    return <header className="navbar">
        <Link to="/" className="navbar__logo"> Watchflix</Link>
        <ul className="nav">
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/home">Home</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/singlemovie">Movies</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/categories">Categories</NavLink>
            </li>
        </ul>
        <div className="navbar__search">
            <input type="text" className="navbar__search__input" ref={inputRef}/>
            <button type="button" className="navbar__search__button" onClick={handleClick}>
                <i className="fas fa-search"></i>
            </button>
            <button className="navbar__search__avatar">
                <i className="fa-solid fa-user-tie"></i>
            </button>
            <button className="navbar__search__login" onClick={routeChange}>{user}</button>
        </div>
    </header>
}

export default AuthenticatedNavbar;
                
                    
                
