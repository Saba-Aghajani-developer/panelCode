import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LogIn from './pages/logIn'
import Dashboard from './pages/dashboard'
import Users from './pages/dashboard/users'
import Profile from './pages/dashboard/profile'
import Setting from './pages/dashboard/setting'
import Notifications from './pages/dashboard/notifications'
import State from './pages/dashboard/state'
import Delivery from './pages/dashboard/delivery'
import Orders from './pages/dashboard/orders'
import Products from './pages/dashboard/products'
import Menu from './pages/menu'
import './index.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<LogIn />} />
        <Route path="/" element={<Menu />}>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/dashboard/users" element={<Users />}/>
          <Route path="/dashboard/profile" element={<Profile />}/>
          <Route path="/dashboard/setting" element={<Setting />}/>
          <Route path="/dashboard/notifications" element={<Notifications />}/>
          <Route path="/dashboard/state" element={<State />}/>
          <Route path="/dashboard/delivery" element={<Delivery />}/>
          <Route path="/dashboard/orders" element={<Orders />}/>
          <Route path="/dashboard/products" element={<Products />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}