import React, { useContext } from 'react';
import './style.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { CustomContext } from '../../../Context/Context';
import { FaUserAlt } from "react-icons/fa";


const Header = () => {


	const { user, setUser } = useContext(CustomContext);
	const navigator = useNavigate()

	const logOutUser = () => {
		setUser({
			email: ''
		})
		localStorage.removeItem('user')
		navigator('/register')
	}

  return (
    <div className="header">
      <div className="container">
        <div className="header_blog">
          <Link to="/">Logo</Link>
            
          <ul className="header_blog-ul">
            <li className="header_blog-nav">
              <NavLink to='/' className="header_blog-link">
                Home
              </NavLink>
            </li>
            <li className="header_blog-nav">
              <NavLink to='/shop' className="header_blog-link">
                Shop
              </NavLink>
            </li>
            <li className="header_blog-nav">
              <NavLink to="about" className="header_blog-link">
                About Us
              </NavLink>
            </li>
            <li className="header_blog-nav">
              <NavLink to="contacts" className="header_blog-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div>
            {user.email.length ? (
            <span onClick={logOutUser}><FaUserAlt/> Log Out</span>
            ) : (
				<Link to="./register">
				<FaRegUser /> Register
				</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
