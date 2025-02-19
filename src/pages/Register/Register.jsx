import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import { auth } from '../../components/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './style.css';
import { CustomContext } from '../../utils/Context';

const Register = () => {
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(false);

  const { user, setUser } = useContext(CustomContext);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('account created');
      localStorage.setItem('user', JSON.stringify(userCredential, user));
      setUser(userCredential.user);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
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
                onChange={(e) => setPassword(e.target.value)}
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
