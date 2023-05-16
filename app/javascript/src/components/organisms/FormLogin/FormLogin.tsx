// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import Input from '../../atoms/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Container,
  WrapForm,
  ButtonLogin,
  ButtonFaceBookLogin,
  LabelInput,
} from './FormLogin.style';

const FormLogin = () => {
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
      .then(({status, msg, token}) => {
        setError(status !== 200);
        setMsg(msg);
        window.localStorage.setItem('access_token', token);
        if(status == 200) navigate("/");
      })
  }

  return (
    <Container>
      <WrapForm>
        <h2>
          Login to App
        </h2>
        <form onSubmit={handleLogin}>
          <LabelInput htmlFor="email">Email address</LabelInput>
          <Input
            type="text"
            hasError={hasError}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="example@gmail.com">
          </Input>
          <LabelInput htmlFor="password">Password</LabelInput>
          <Input
            type="password"
            hasError={hasError}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder="Password">
          </Input>
          <div className='form-action'>
            <ButtonLogin>
              Login
            </ButtonLogin>
          </div>
        </form>
        <form>
          <ButtonFaceBookLogin>
            Login by FaceBook
          </ButtonFaceBookLogin>
        </form>
        <div>
          <div>
            <Link to="/">Sign Up</Link>
          </div>
          <div>
            <a href="https://www.google.com/">Forgot password</a>
          </div>
        </div>
      </WrapForm>
    </Container>
  )
}

export default FormLogin
