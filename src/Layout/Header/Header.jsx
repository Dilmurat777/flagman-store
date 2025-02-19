import React, { useContext } from 'react';
import './style.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { CustomContext } from '../../utils/Context';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
  const { user, setUser } = useContext(CustomContext);

  const navigator = useNavigate();

  const logOutUser = () => {
    if (!user || !user.email) {
      console.log("Ошибка: Пользователь не авторизован!");
      return; // Прерываем выполнение, если email отсутствует
    }
        // Проверка: есть ли пользователь в localStorage
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            console.log("Ошибка: Данные пользователя не найдены в localStorage!");
        }
    
     // Очистить контекст пользователя
     setUser({ email: '' });

     // Удалить данные пользователя из localStorage
     localStorage.removeItem('user');
 
     // Перенаправить на страницу входа
     navigator('/login');
 
     console.log("Пользователь успешно вышел из системы!");
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header_blog">
          <Link to="/">Logo</Link>

          <ul className="header_blog-ul">
            <li className="header_blog-nav">
              <NavLink to="/" className="header_blog-link">
                Home
              </NavLink>
            </li>
            <li className="header_blog-nav">
              <NavLink to="/shop" className="header_blog-link">
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
          <div className="header__blog-btn">
            {user && user.email ? (
              <button onClick={logOutUser}>
                <FaUserAlt />
                {user.email} Sign out
              </button>
            ) : (
              <Link to="/login">
                <FaRegUser /> Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
