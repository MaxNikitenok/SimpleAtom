import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main-page/Main.jsx';
import { App } from './App.jsx';
import { Simpleatom } from './pages/sinleatom-page/Simpleatom.jsx';
import { AboutUs } from './pages/about-us-page/AboutUs.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/SimpleAtom'>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/main" element={<Main />} />
          <Route path="/simpleatom" element={<Simpleatom />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
