import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'reactstrap'
import { Formik } from 'formik'
import { InputText, Button } from 'Components/common'
import './styles.scss'
import Assets from 'Assets'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChange = (name, value, setFieldValue) => {
    setFieldValue(name, value)
  }

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <div className="loginContainer d-flex justify-content-between flex-column">
      <Container>
        <Row className="loginHeader">
          <Col xs="6">
            <p className="titleLogin">Log In</p>
          </Col>
          <Col xs="6">
            <img src={Assets.images.icon} />
          </Col>
        </Row>
      </Container>
      <Formik initialValues={{ email, password }} onSubmit={onSubmit}>
        {({ setFieldValue, handleSubmit, values }) => (
          <Form className="containterInput" onSubmit={handleSubmit}>
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
            <Button className="btnLogin w-100" text="Login" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
