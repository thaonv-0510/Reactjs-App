import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './components/pages/home_page/HomePage'
import FormLogin from './components/pages/sessions/FormLogin'

const Error = () => (
  <div>
    <h3>
      Error
    </h3>
  </div>
)

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/:something' element={<Error/>}></Route>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/users/sign_in' element={<FormLogin />}/>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
