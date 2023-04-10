import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import HomePage from './home_page/HomePage'
import FormLogin from './sessions/FormLogin'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/:something' element={<Error/>}></Route>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/users/sign_in' element={<FormLogin />}/>
    </Routes>
  </BrowserRouter>
)

const Error = () => (
  <div>
    <h3>
      Error
    </h3>
  </div>
)


document.addEventListener('DOMContentLoaded', () => {
  const appRoot = createRoot(document.getElementById('root'));
  appRoot.render(
    <App/>,
    document.getElementById('root'),
  )
})
