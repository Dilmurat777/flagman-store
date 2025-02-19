import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoEyeSharp } from 'react-icons/io5';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import { CustomContext } from '../../utils/Context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/firebase/firebase';

const Login = () => {
  const { user, setUser } = useContext(CustomContext);
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successfully');

      navigate('/');
      localStorage.setItem('user', JSON.stringify(userCredential.user));
setUser(userCredential.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="content">
      <form action="" className="form" autoComplete="on" onSubmit={loginUser}>
        <p className="form__email"></p>
        <h3 className="form__title">Login</h3>
		<h3>Flagman store</h3>
        <input
          type="email"
          className="form__field"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
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
          Login
        </button>
        <Link to="/register">I don't have an account</Link>
			 
			  <Link className='form__btn-link' to="/">Enter without login</Link> 
		
      </form>
    </div>
  );
};

export default Login;
