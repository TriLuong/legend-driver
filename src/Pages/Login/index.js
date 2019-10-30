import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { InputText, Button } from 'Components/common'
import './styles.scss'
import Assets from 'Assets'

const onChange = (name, value) => {
  console.log(name, value)
}

const Login = () => (
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
    <div className="containterInput">
      <InputText
        type="email"
        placeholder="Email"
        name="email"
        onChange={onChange}
        className="mb-2"
      />

      <InputText
        type="password"
        placeholder="Password"
        name="password"
        onChange={onChange}
        className="mb-2"
      />
      <Button className="btnLogin w-100" text="Login" />
    </div>
  </div>
)

export default Login
