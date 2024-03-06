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
import MainContainer from './components/MainComp/MainContainer.jsx';
import WebDevelopment from './courses/WebDevelopment/WebDevelopment.jsx';
import Database from './courses/Database/Database.jsx';
import Programming from './courses/Programming/Programming.jsx';
import Excel from './courses/Excel/Excel.jsx';
import Contact from './components/Contact/Contact.jsx';
import DigitalMarketing from './clients/DigitalMarketing/DigitalMarketing.jsx';
import AppCreation from './clients/AppCreation/AppCreation.jsx'
import Website from './clients/Website/Website.jsx';
import Software from './clients/Software/Software.jsx';
import Client from './components/Clients/Clients.jsx';

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
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/training',
      element: <Training/>
    },
    {
      path: '/training/excel-course',
      element:<Excel/>
    },
    {
      path: '/training/web-development-course',
      element:<WebDevelopment/>
    },
    {
      path: '/training/database-course',
      element:<Database/>
    },
    {
      path: '/training/programming-course',
      element:<Programming/>
    },
    {
      path: '/client',
      element: <Client/>
    },
    {
      path: '/client/website-creation',
      element: <Website/>
    },
   
    {
      path: '/client/digital-marketing',
      element:<DigitalMarketing/>
    },
    {
      path: '/client/app-creation',
      element:<AppCreation/>
    },
    {
      path: '/client/software-creation',
      element:<Software/>
    },
   
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
