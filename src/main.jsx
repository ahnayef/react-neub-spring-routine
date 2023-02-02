import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error404 from './Components/Error404';
import Home from './Components/Home';
import Routine from "./Components/Routine/Routine"
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error404/>
  },
  {
    path: "/routine",
    element:<Routine/>
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
