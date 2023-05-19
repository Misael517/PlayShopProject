import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Discover from './Pages/Discover/Discover.tsx'
import './index.css'
import TheWitcher3 from './Pages/GamesPages/TheWitcher3/TheWitcher.tsx';

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
    path: "/profile",
    element: ''
  },
  {
    path: "/cart",
    element: ''
  },
  {
    path: "/TheWitcher3",
    element: <TheWitcher3 />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
