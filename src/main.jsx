import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main.jsx'
import Home from './pages/Home'
import AddCoffee from './pages/addCoffee/AddCoffee'
import UpdateCoffee from './pages/UpdateCoffee'
import SingleItem from './pages/SingleItem'
import Login from './pages/Login'
import Registration from './pages/Registration'
import AuthProvider from './Provider/AuthProvider'
import PrivateRoutes from './routes/PrivateRoutes'
// import Product from './components/products/Product'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        // loader: () => fetch('https://espresso-server-site-mehedihasanweb.vercel.app/addCoffee')
      }
    ]
  },
  {
    path: 'addCoffee',
    element: <AddCoffee />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'registration',
    element: <Registration />
  },
  {
    path: 'updateCoffee/:id',
    element: <PrivateRoutes><UpdateCoffee /></PrivateRoutes>,
    loader: ({ params }) => fetch(`https://espresso-server-site-mehedihasanweb.vercel.app/addCoffee/${params.id}`)
  },
  {
    path: 'singlePage/:id',
    element:<PrivateRoutes> <SingleItem /></PrivateRoutes>,
    loader: ({ params }) => fetch(`https://espresso-server-site-mehedihasanweb.vercel.app/addCoffee/${params.id}`)
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
