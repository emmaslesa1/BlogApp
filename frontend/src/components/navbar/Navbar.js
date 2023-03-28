import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/authSlice'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


export const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const { user } = useSelector((state) => state.auth)

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])

  const [isScrolled, setIsScrolled] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

	return (
		<div className="div">
			<Link to='/' className='title'>BlogApp</Link>
			<nav ref={navRef}>
				<div className="center">
					<Link to='/' className='a'>Home</Link>
					<Link to='/about' className='a'>About</Link>
					<Link to='/create' className='a'>Create</Link>
				</div>
				<div className="right">
					<button onClick={handleLogout} className='logout'>Logout</button>
          {user && (<p className="user">{user.email}</p>	)}
				</div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navbar;
