import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import React from 'react';
import * as ReactDOM from "react-dom/client";
import ScrollToTop from './components/ScrollToTop';
import Project from './pages/projects/Project';

// ReactDOM.render(<App />, document.querySelector('#root'))

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop/>
          <Home/>
        </>
      ),
    },
    {
      path: "/projects/:id",
      element: (
        <>
          <ScrollToTop/>
          <Project/>
        </>
      ),
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );