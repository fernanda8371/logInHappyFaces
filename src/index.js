import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./components/Navbar";

import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
<div>
<Navbar />

</div>

<div>
  <h1 className='hello-user'>Hello User</h1>
</div>
    
  </BrowserRouter>
);

reportWebVitals();
