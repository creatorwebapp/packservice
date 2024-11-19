import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import LoginPage from './pages/login_page/LoginPage';
import HomePage from './pages/home_page/HomePage';
import NewProduct from './pages/new_product/NewProduct';
import PhotoPage from './pages/photo_page/PhotoPage';
import ScanPage from './pages/scan_page/ScanPage';
import WorkPage from './pages/work_page/WorkPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage/>),
  },
  {
    path: "login",
    element: (<LoginPage/>),
  },
  {
    path:"login/work_page/new_product",
    element: (<NewProduct/>)
  },
  {
    path:"photo_page",
    element: (<PhotoPage/>)
  },
  {
    path:"scan_page",
    element:(<ScanPage/>)
  },
  {
    path:"login/work_page",
    element:(<WorkPage/>)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);