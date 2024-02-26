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
import Development from './components/Clients/Clients.jsx';
import MainContainer from './components/MainComp/MainContainer.jsx';
import WebDevelopment from './courses/WebDevelopment/WebDevelopment.jsx';
import Database from './courses/Database/Database.jsx';
import Programming from './courses/Programming/Programming.jsx';
import DigitalMarketing from './courses/DigitalMarketing/DigitalMarketing.jsx';
import AppDevelopment from './courses/AppDevelopment/AppDevelopment.jsx';
import SoftwareDevelopment from './courses/SoftwareDevelopment/SoftwareDevelopment.jsx';
import Excel from './courses/Excel/Excel.jsx';

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
      path: '/development',
      element: <Development/>
    },
    {
      path: '/web-development-course',
      element:<WebDevelopment/>
    },
    {
      path: '/database-course',
      element:<Database/>
    },
    {
      path: '/programming-course',
      element:<Programming/>
    },
    {
      path: '/digital-marketing-course',
      element:<DigitalMarketing/>
    },
    {
      path: '/app-development-course',
      element:<AppDevelopment/>
    },
    {
      path: '/software-development-course',
      element:<SoftwareDevelopment/>
    },
    {
      path: '/excel-course',
      element:<Excel/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
