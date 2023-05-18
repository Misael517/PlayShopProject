import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Discover from './Pages/Discover/Discover.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Support from './Pages/Support/Support.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: 'Error page',
  },
  {
    path: "/discover",
    element: <Discover />
  },
  {
    path: "/support",
    element: <Support />
  },
  {
    path: "/profile",
    element: ''
  },
  {
    path: "/cart",
    element: ''
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
