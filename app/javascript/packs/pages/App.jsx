import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './home_page/HomePage'
import FormLogin from './sessions/userLogin'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/:something' element={<Error/>}></Route>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/users/sign_in' element={<FormLogin/>}/>
    </Routes>
  </BrowserRouter>
)

const Error = () => {
  <div>
    <h3>
      Error
    </h3>
  </div>
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root'),
  )
})
