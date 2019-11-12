import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { InputText, Button, Text } from 'Components/common'
import Assets from 'Assets'
import { useInjectSaga } from 'redux-injectors'
import { loginRequest } from 'Store/auth/actions'
import saga from './saga'
import './styles.scss'

const key = 'login'
const Login = ({ match }) => {
  useInjectSaga({ key, saga })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onChange = (name, value, setFieldValue) => {
    setFieldValue(name, value)
  }

  const onSubmit = values => {
    console.log(values)
    dispatch(loginRequest(values))
  }

  return (
    <div className="loginContainer">
      <div className="containerHeader d-flex flex-row">
        <Text text="Log In" />
        <img src={Assets.images.icon} />
      </div>
      <div className="containterInput">
        <Formik initialValues={{ email, password }} onSubmit={onSubmit}>
          {({ setFieldValue, handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <InputText
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={(name, value) => onChange(name, value, setFieldValue)}
                className="mb-2"
              />
              <InputText
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={(name, value) => onChange(name, value, setFieldValue)}
                className="mb-2"
              />
              <Button text="Login" type="submit" />
            </form>
          )}
        </Formik>
        <Link to="/user/forgotPassword" className="forgetPassword">
          Forgot Password?
        </Link>
      </div>
    </div>
  )
}

export default Login
