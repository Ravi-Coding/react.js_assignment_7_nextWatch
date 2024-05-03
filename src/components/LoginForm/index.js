// eslint-disable-next-line
import React, {Component} from 'react'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../NxtWatchContext.js'

import {
  LoginContainer,
  AppLogo,
  Form,
  Label,
  Input,
  CheckBox,
  ShowPassword,
  LoginButton,
  ErrorMsg,
  MainContainer,
  CheckBoxContainer,
} from './styledComponents'

const loginApiUrl = 'https://apis.ccbp.in/login'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isPassword: false,
    isValid: true,
    errorMessage: '',
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailureLogin = errorInfo => {
    this.setState({isValid: false, errorMessage: errorInfo})
  }

  givePermissions = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onSubmitUserCredentials = event => {
    event.preventDefault()
    this.givePermissions()
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({isPassword: !prevState.isPassword}))
  }

  render() {
    const {username, password, isPassword, isValid, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <MainContainer bgColor={isDarkModeOn ? '#181818' : '#fff'}>
              <LoginContainer bgColor={isDarkModeOn ? '#000000' : '#fff'}>
                <AppLogo
                  src={
                    isDarkModeOn
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <Form onSubmit={this.onSubmitUserCredentials}>
                  <Label
                    htmlFor="user-name"
                    color={isDarkModeOn ? '#fff' : '#1e293b'}
                  >
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    id="user-name"
                    onChange={this.onChangeUserName}
                    value={username}
                    color={isDarkModeOn ? '#fff' : '#181818'}
                  />
                  <Label
                    htmlFor="pass-word"
                    color={isDarkModeOn ? '#fff' : '#1e293b'}
                  >
                    PASSWORD
                  </Label>
                  <Input
                    type={isPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="pass-word"
                    onChange={this.onChangeUserPassword}
                    value={password}
                    color={isDarkModeOn ? '#fff' : '#181818'}
                  />
                  <CheckBoxContainer>
                    <CheckBox
                      type="checkbox"
                      id="check-box"
                      onChange={this.onChangeShowPassword}
                    />
                    <ShowPassword
                      htmlFor="check-box"
                      color={isDarkModeOn ? '#fff' : '#181818'}
                    >
                      Show Password
                    </ShowPassword>
                  </CheckBoxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {!isValid && <ErrorMsg>* {errorMessage}</ErrorMsg>}
                </Form>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm // <- This export statement was unnecessary and caused duplication
