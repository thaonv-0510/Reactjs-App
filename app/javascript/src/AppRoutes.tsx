import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from '@src/components/pages/homePage/HomePage'
import FormLogin from '@src/components/organisms/FormLogin';

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
      <Route path='/account/login' element={<Error />}/>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
