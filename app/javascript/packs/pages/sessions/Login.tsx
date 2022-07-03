// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"
import Input from '../../atoms/Input'
import { BrowserRouter, Link, BrowserHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  vertical-align: middle;
  font-family: "Noto Sans Japanese", "Roboto", Arial;
  display: flex;
  color: #091F6C;
  min-height: 100vh;
  -webkit-align-items: center;

  #login-form {
    padding: 3rem;
    min-width: 450px;
    width: 30%;
    margin: 0 0 0 48px;
    max-height: 800px;
    max-width: 700px;
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
  height: 70px;
  background: #1739a5;
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
  border-radius: 5px;
  color: #fff;
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: rgb(42 89 149);
    box-shadow: 0 1px 20px rgb(0 0 0 / 20%);
  }
`
class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', msg: '', hasError: false }
    this.handleLogin = this.handleLogin.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setEmail = this.setEmail.bind(this)
  }

  async handleLogin(event) {
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
            email: this.state.email,
            password: this.state.password
          }
        })
    }).then((res) => res.json())
      .then(({status, msg}) => {
        this.setState({
          msg: msg,
          hasError: status !== 200
        })
        console.log(this.props)
        this.props.history.push("/");
      })
  }

  setEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <div id='login-form'>
          <h2>
            Login to App
          </h2>
          <form onSubmit={this.handleLogin}>
            <label htmlFor="email">Email address</label>
            <Input
              type="text"
              hasError={this.state.hasError}
              onChange={this.setEmail}
              placeholder="example@gmail.com">
            </Input>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              hasError={this.state.hasError}
              onChange={this.setPassword}
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
            <BrowserRouter>
              <div>
                <Link to="/">Sign Up</Link>
              </div>
              <div>
                <a href="https://www.google.com/">Forgot password</a>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </Container>
    )
  }
}

export default FormLogin;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <FormLogin history={BrowserHistory}/>,
    document.getElementById('root'),
  )
})
