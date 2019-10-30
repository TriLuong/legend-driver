import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row, Col, Input } from 'reactstrap'
import { Formik } from 'formik'
import { InputText, Button } from 'Components/common'
import Assets from 'Assets'
import { useInjectSaga } from 'redux-injectors'
import saga from './saga'
import { loginRequest } from 'Store/auth/actions'
import './styles.scss'

const key = 'login'
const Login = () => {
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
    <div className="loginContainer d-flex justify-content-between flex-column">
      <div className="containerHeader d-flex flex-row">
        <div className="loginHeader">
          <p className="titleLogin">Log In</p>
        </div>
        <div>
          <img src={Assets.images.icon} />
        </div>
      </div>
      <Formik initialValues={{ email, password }} onSubmit={onSubmit}>
        {({ setFieldValue, handleSubmit, values }) => (
          <form className="containterInput" onSubmit={handleSubmit}>
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
    </div>
  )
}

export default Login
