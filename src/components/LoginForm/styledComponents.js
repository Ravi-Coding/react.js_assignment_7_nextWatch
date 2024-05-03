import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`

export const LoginContainer = styled.div`
  padding: 30px;
  border: 0px solid;
  border-radius: 4px;
  background-color: ${props => props.bgColor};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AppLogo = styled.img`
  width: 150px;
`

export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 480px;
  @media screen and (max-width: 576px) {
    width: 220px;
  }
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.color};
  margin-top: 20px;
`

export const Input = styled.input`
  border: 1px solid #475569;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  padding: 6px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.color};
  outline: none;
  margin-top: 6px;
  @media screen and (max-width: 576px) {
    height: 30px;
  }
`
export const LoginButton = styled.button`
  border: 0px solid #475569;
  border-radius: 4px;
  height: 50px;
  width: 100%;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    height: 32px;
    font-size: 10px;
  }
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const CheckBox = styled.input`
  height: 21px;
  width: 21px;
  @media screen and (max-width: 576px) {
    height: 15px;
    width: 15px;
  }
`
export const ShowPassword = styled(Label)`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.color};
  margin-top: 2px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ff0b37;
`
