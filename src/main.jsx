import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './Component/Home/Home.jsx'
import { Provider } from 'react-redux'
import {store} from "./Store/Store"
import Cart from './Pages/Cart.jsx'
import AllProduct from './Pages/AllProduct.jsx'
import Login from './Pages/Login.jsx'
import Signup from "./Pages/Signup.jsx";
import Searchitem from './Component/Search/Searchitem.jsx'
import ProductDetail from "./Pages/ProductDetail.jsx"
import Logout from './Pages/Logout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<App/>}>
      <Route path='/Home' element= {<Home/>}/>
      <Route path='/Products' element = {<AllProduct/>}/>
      <Route path='/Cart' element = {<Cart/>}/>
      <Route path='/Searchitem' element = {<Searchitem/>}/>
      <Route path='/ProductDetail/:productId' element = {<ProductDetail/>}/>
      <Route path='/Login' element = {<Login/>}/>
      <Route path='/Signin' element = {<Signup/>}/>
      <Route path='/Logout' element = {<Logout/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
