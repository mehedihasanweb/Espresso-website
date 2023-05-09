import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main.jsx'
import Home from './pages/Home'
import AddCoffee from './pages/addCoffee/AddCoffee'
import UpdateCoffee from './pages/UpdateCoffee'
import SingleItem from './pages/SingleItem'
// import Product from './components/products/Product'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/addCoffee')
      }
    ]
  },
  {
    path: 'addCoffee',
    element: <AddCoffee />
  },
  // {
  //   path: 'updateCoffee',
  //   element: <UpdateCoffee />
  // },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee />,
    loader: ({params}) => fetch(`http://localhost:5000/addCoffee/${params.id}`)
  },
  {
    path: 'singlePage/:id',
    element: <SingleItem />,
    loader: ({params}) => fetch(`http://localhost:5000/addCoffee/${params.id}`)
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
