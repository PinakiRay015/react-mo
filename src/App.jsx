import React from 'react'
import Aside from './Components/Aside'
import Main from './Components/Main'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login'
import Television from './Components/Television/Television'
import Radio from './Components/Radio/Radio'
import Sports from './Components/Sports/Sports'
import Category from './Components/Category/Category'
const App = () => {

  const myRouters = createBrowserRouter([
    {
      path: '/login',
      element : <><Aside/><Login/></>
    },
    {
      path: '/',
      element: <><Aside/><Main/></>
    },
    {
      path: '/television',
      element: <><Aside/><Television/></>
    },
    {
      path: '/radio',
      element: <><Aside/><Radio/></>
    },
    {
      path: '/sports',
      element: <><Aside/><Sports/></>
    },
    {
      path: '/category',
      element: <><Aside/><Category/></>
    },
  ])

  return (
    <div className='flex' >
      <RouterProvider router={myRouters} />
    </div>
  )
}

export default App
