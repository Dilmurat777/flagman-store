import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const CustomContext = createContext();

export const Context = (props) => {
  const [user, setUser] = useState({
    email: '',
  });

  
  //SearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const product = searchParams.get('title', 'name') || '';
  const latest = searchParams.has('latest');
  const startsForm = latest ? 10 : 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {}

    if(query.length) params.title = query
    if(isLatest) params.latest = true

    setSearchParams(params);
    e.target.search.value = ''
  };
  //SearchParams
  // const [filter, setFilter] = useState('all');
  // const title = 'all';
  

  const [cardItem, setCardItem] = useState([]);
  const [error, setError] = useState(null)
  useEffect(() => {
    const apiUrl = `https://api.escuelajs.co/api/v1/products`;

    axios.get(apiUrl).then((resp) => {
      const data = resp.data;
      setCardItem(data);
    })
    .catch ((error) => {
      console.log('Error fetching data:', error);
      setError('Page not founded error 404')
    })
  }, []);


  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  const value = {
    user,
    setUser,
    cardItem,
    setCardItem,
    product,
    handleSubmit,
    startsForm,
    error
  };



  return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>;
};
