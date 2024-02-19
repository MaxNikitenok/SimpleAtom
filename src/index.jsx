import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main.jsx';
import { App } from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/SimpleAtom'>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/main" element={<Main />} />
          <Route path="/simpleatom" element={<Main />} />
          <Route path="/whySimpleatom" element={<Main />} />
          <Route path="/aboutUs" element={<Main />} />
          <Route path="/contactUs" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
