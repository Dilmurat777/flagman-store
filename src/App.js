import './style.css';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './Layout/Layout';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
// import SinglePage from './pages/SinglePage/SinglePage';
import { lazy, Suspense, useEffect, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const SinglePage = lazy(() => import('./pages/SinglePage/SinglePage'));
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />}>
          <Route path="team" element={<h2>Our Team</h2>} />
          <Route path="contact" element={<h2>Our Contact</h2>} />
        </Route>
        <Route path="about-us" element={<Navigate to="/about" replace />} />
        <Route path="contacts" element={<Contacts />} />
        <Route
          path=":id"
          element={
            <Suspense
              fallback={
                <div className="loading">
                  <FadeLoader
                    color={'rgb(201, 251, 201)'}
                    loading={loading}
                    // cssOverride={override}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="home__loading"
                  />
                </div>
              }>
              <SinglePage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
