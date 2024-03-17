import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main-page/Main.jsx';
import { App } from './App.jsx';
import { Simpleatom } from './pages/simleatom-page/Simpleatom.jsx';
import { AboutUs } from './pages/about-us-page/AboutUs.jsx';
import { Form } from './pages/form-page/Form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/main" element={<Main />} />
          <Route path="/simpleatom" element={<Simpleatom />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/form">
            <Route path=":form_name" element={<Form />}>
            <Route path=":partner_country" element={<Form />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
