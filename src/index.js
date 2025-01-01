import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; // Import the router
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

/* setup Axios*/
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 <Provider store={store}>
  <RouterProvider router={router} />
 </Provider>
    
  //</React.StrictMode>
);

reportWebVitals();
