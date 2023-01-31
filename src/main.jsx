import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Error404 from './Components/Error404';
import Home from './Components/Home';
import SectionA from './Components/SectionA/SectionA';
import SectionB from './Components/SectionB/SectionB';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error404/>
  },
  {
    path:"sectionA",
    element: <SectionA/>
  },
  {
    path:"sectionB",
    element: <SectionB/>
  },
  {
    path:"dashboard",
    element: <Dashboard/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
