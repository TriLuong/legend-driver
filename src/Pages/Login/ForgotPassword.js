import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { InputText, Button, Text } from 'Components/common'
import Assets from 'Assets'
import { useInjectSaga } from 'redux-injectors'
import { forgotPassword } from 'Store/auth/actions'
import saga from './saga'
import './styles.scss'

const redirectURL = 'https://legend-staging-driver.web.app/user/login'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const onChange = (name, value, setFieldValue) => {
    setFieldValue(name, value)
  }

  const onSubmit = values => {
    dispatch(forgotPassword({ ...values, redirectURL }))
  }

  return (
    <div className="loginContainer">
      <div className="containerHeader d-flex flex-row">
        <Text text="Forgot Password" />
        <img src={Assets.images.icon} />
      </div>
      <div className="containterInput">
        <Formik initialValues={{ email }} onSubmit={onSubmit}>
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
              <Button text="Reset" type="submit" />
            </form>
          )}
        </Formik>
        <Link to="/user/login" className="forgetPassword">
          Login?
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword
