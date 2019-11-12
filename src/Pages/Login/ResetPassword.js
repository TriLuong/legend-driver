import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { InputText, Button, Text } from 'Components/common'
import Assets from 'Assets'
import { useInjectSaga } from 'redux-injectors'
import { loginRequest } from 'Store/auth/actions'
import saga from './saga'
import './styles.scss'

const key = 'login'

const ResetPassword = () => {
  useInjectSaga({ key, saga })
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const dispatch = useDispatch()

  const onChange = (name, value, setFieldValue) => {
    setFieldValue(name, value)
  }

  const onSubmit = values => {
    console.log(values)
    // dispatch(loginRequest(values))
  }

  return (
    <div className="loginContainer">
      <div className="containerHeader d-flex flex-row">
        <Text text="Reset Password" />
        <img src={Assets.images.icon} />
      </div>
      <Formik initialValues={{ oldPassword, newPassword }} onSubmit={onSubmit}>
        {({ setFieldValue, handleSubmit, values }) => (
          <form className="containterInput" onSubmit={handleSubmit}>
            <InputText
              type="password"
              placeholder="Old Password"
              name="oldPassword"
              value={values.oldPassword}
              onChange={(name, value) => onChange(name, value, setFieldValue)}
              className="mb-2"
            />
            <InputText
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={values.newPassword}
              onChange={(name, value) => onChange(name, value, setFieldValue)}
              className="mb-2"
            />
            <Button text="Reset" type="submit" />
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ResetPassword
