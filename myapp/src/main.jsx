import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <ToastContainer position="top-right"
      // autoClose={2000}
      // hideProgressBar={false}
      // closeOnClick
      // pauseOnHover
      // draggable
      // theme="dark" 
      />

  </BrowserRouter>,
)
