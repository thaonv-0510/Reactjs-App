// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"
import Input from '../../atoms/input'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  vertical-align: middle;
  font-family: "Noto Sans Japanese", "Roboto", Arial;
  display: flex;
  color: #091F6C;
  min-height: 100vh;
  -webkit-align-items: center;
  justify-content: center;

  #login-form {
    padding: 3rem;
    min-width: 450px;
    width: 30%;
    margin: 0 0 0 48px;
    max-height: 800px;
    max-width: 500px;
    box-shadow: 0 1px 20px rgb(0 0 0 / 20%);
    border-radius: 10px;
    box-sizing: border-box;
  }

  h2 {
    color: #1739a5;
  }

  label {
    display: block;
    color: #091F6C;
    font-size: 0.75rem;
    font-weight: bold;
    margin: 30px 0 10px 0
  }
`
const ButtonLogin = styled.button`
  height: 50px;
  background: #1EC18D;
  border: none;
  border-radius: 10px;
  color: #fff;
  width: 100%;
  margin: 20px 0px;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: #1EC18D;
    box-shadow: 0 1px 20px rgb(0 0 0 / 20%);
  }
`

const ButtonFaceBookLogin = styled.button`
  height: 40px;
  background: rgb(23 119 242);
  border: none;
  border-radius: 10px;
  color: #fff;
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: 0 1px 20px rgb(0 0 0 / 20%);
  }
`
export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [hasError, setError] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    await fetch('/users/sign_in', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf,
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify(
        {
          user: {
            email: email,
            password: password
          }
        })
    }).then((res) => res.json())
      .then(({status, msg}) => {
        setError(status !== 200);
        setMsg(msg);
        if(status == 200) navigate("/");
        console.log(email, password, msg, hasError)
      })
  }

  return (
    <Container>
      <div id='login-form'>
        <h2>
          Login to App
        </h2>
        <label htmlFor="email">Email Address</label>
        <Input
          type="text"
          hasError={hasError}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com">
        </Input>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          hasError={hasError}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password">
        </Input>
        <div className='form-action'>
          <ButtonLogin onClick={handleLogin}>
            Login
          </ButtonLogin>
        </div>
        <ButtonFaceBookLogin onClick={() => undefined}>
          Login by FaceBook
        </ButtonFaceBookLogin>
        <div>
          <div>
            <Link to="/">Sign Up</Link>
          </div>
          <div>
            <a href="https://www.google.com/">Forgot password</a>
          </div>
        </div>
      </div>
    </Container>
  )
}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <FormLogin/>,
//     document.getElementById('root'),
//   )
// })
