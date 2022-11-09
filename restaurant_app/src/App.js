import React from 'react';

import ListPage from './pages/ListPage';
import AboutPage from './pages/AboutPage';
import HomePages from './pages/HomePages';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
  return (
    <>
    <HomePages />
    <AboutPage />
    <ListPage />
    </>
  )
}

export default App