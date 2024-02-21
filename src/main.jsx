import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from './MainContainer.jsx';
import AboutUs from './AboutUs.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path: '/aboutus',
      element: <AboutUs/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
