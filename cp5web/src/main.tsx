import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'

const router = createBrowserRouter([

  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/cadastro",
    element: <Cadastro/>,
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
