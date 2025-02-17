import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import './style.css';
import axios from 'axios';
import { CustomContext } from '../../Context/Context';

const Register = () => {
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [eye, setEye] = useState(false);

  const { user, setUser } = useContext(CustomContext);
  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault();

    let newUser = {
      email,
      password: e.target[0].value,
    };
    axios
      .post('https://67ad82eb3f5a4e1477dde408.mockapi.io/test1/users', newUser)
		.then(({ data }) => {
		  console.log(data);
		  
		  setUser({
			...data
		  });
		  localStorage.setItem('user', JSON.stringify({...data}))
		  
		navigate('/')
	  })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="content">
      <form action="" className="form" onSubmit={registerUser}>
        <p className="form__email" onClick={() => setStatus(false)}>
          {status && (
            <>
              {email} <BsPencil />
            </>
          )}
        </p>

        <h2 className="form__title">{status ? 'Create a password' : 'Register'}</h2>

        {status && (
          <>
            <div className="form__password">
              <input
                type={eye ? 'text' : 'password'}
                className="form__field"
                placeholder="Password"
              />

              <span className="form__eye" onClick={() => setEye((prev) => !prev)}>
                {eye ? <HiMiniEyeSlash /> : <IoEyeSharp />}
              </span>
            </div>
            <button className="form__btn" type="submit">
              Create account
            </button>
          </>
        )}

        {!status && (
          <>
            <input
              value={email}
              type="email"
              className="form__field"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form__btn" type="button" onClick={() => setStatus(true)}>
              Continue
            </div>
            <Link to="/login">I have an account</Link>
          </>
        )}
      </form>
    </div>
  );
};

export default Register;
