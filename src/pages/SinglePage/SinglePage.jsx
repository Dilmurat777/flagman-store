import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const SinglePage = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState(null); // Состояние для одного товара
	const navigate = useNavigate()
	
  useEffect(() => {
    const apiUrl = `https://api.escuelajs.co/api/v1/products/${id}`;

    axios
      .get(apiUrl)
      .then((resp) => {
        const data = resp.data;
        setSingleItem(data); 
      })
      .catch((error) => {
        console.log('Error fetching single item:', error);
      });
  }, [id]);

  // if (!singleItem) {
  //   return <p className='single__page-louder'>Loading...</p>;
  // }

  return (
    <div className="single__page">
      <div className="container">
        {
          singleItem && <div className="single__page-item">
          <img src={singleItem.category.image} alt={singleItem.title} className="single__page-img" />
          <ul className="single_item-list">
            <li>
              <h4>{singleItem.category.name}</h4>
            </li>
            <li>
              <p>{singleItem.title}</p>
            </li>
            <li>
              <p>$ {singleItem.price}</p>
            </li>
            <li>
              <p>{singleItem.description}</p>
            </li>
          <button onClick={() => navigate(-1)} className='btn__goback btn'>Go Back</button>
        <div className="single_item-btn">
          <button className='single__page-btn btn'>Add to basket</button>
          <button className='single__page-btn btn'>Buy now</button>
        </div>
          </ul>
        </div>
          
        }
      </div>
    </div>
  );
};

export default SinglePage;
