import React, { useContext, useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
import SearchFilter from '../SearchFilter/SearchFilter';

const ApiUrl = () => {
  const { cardItem, user, product, startsForm, error, categoryId, setCategory } = useContext(CustomContext);

  const navigate = useNavigate();
  const goToSinglePage = () => navigate('/contacts');
  const goToRegister = () => navigate('/login');

  if (error) {
    return <h2 className="error">{error}</h2>;
  }
  const list = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes', 'Miscellaneous'];

  return (
    <div className="container">
      <div className="card__category-filters">
        <div className="card_category-btns">
          {list.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCategory(idx)}
              className={`card_category-btn ${categoryId === idx ? 'active' : ''}`}>
              {item}
            </button>
          ))}
        </div>
        <SearchFilter />
      </div>

      <div className="card">
        {cardItem &&
          cardItem

            .filter(
              (item) =>
                (item.title.toLowerCase().includes(product.toLowerCase()) ||
                  item.category.name.toLowerCase().includes(product.toLowerCase())) &&
                item.id >= startsForm,
            )
            .map((item) => {
              return (
                <div key={item.id} className="card__item">
                  <Link to={`${item.id}`} className="card__item-link">
                    <img className="card__item-img" src={item.images[0]} alt="" />
                  </Link>
                  <ul className="card_item-list">
                    <li>
                      <h4>{item.category.name}</h4>
                    </li>
                    <li>
                      <p>{item.title}</p>
                    </li>
                    <li>
                      <p>$ {item.price}</p>
                    </li>
                  </ul>
                  <div className="card_item-btn">
                    <button
                      onClick={user.email === '' ? goToRegister : goToSinglePage}
                      className="card_category-btn">
                      Add to basket
                    </button>
                    <button
                      onClick={user.email === '' ? goToRegister : goToSinglePage}
                      className="card_category-btn">
                      Buy
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ApiUrl;
