import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Training from './components/Training/Training.jsx';
import Contact from './components/Contact/Contact.jsx';
import Development from './components/Development/Development.jsx';
import MainContainer from './components/MainComp/MainContainer.jsx';

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
    },
    {
      path: '/training',
      element: <Training/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/development',
      element: <Development/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
