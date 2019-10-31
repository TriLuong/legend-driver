import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap'
import Assets from 'Assets'

const TodayLoads = () => (
  <Container>
    <Row>
      <Col sm="12">
        <h4 className="headerDate">Wednesday-Oct-15th</h4>
      </Col>
    </Row>
    <div className="containerLoadItems">
      <Row className="containerLoadItem">
        <Col sm="2" xs="2">
          <img src={Assets.images.loadLeftIcon} />
        </Col>
        <Col sm="10" xs="10">
          <h4 className="loadId">#1263893488</h4>
          <p className="loadDetail">Flatbed • 10/26/2019 • 17:00</p>
        </Col>
      </Row>
      <Row className="containerLoadItem">
        <Col sm="2" xs="2">
          <img src={Assets.images.loadLeftIcon} />
        </Col>
        <Col sm="10" xs="10">
          <h4 className="loadId">#1263893488</h4>
          <p className="loadDetail">Flatbed • 10/26/2019 • 17:00</p>
        </Col>
      </Row>
      <Row className="containerLoadItem">
        <Col sm="2" xs="2">
          <img src={Assets.images.loadLeftIcon} />
        </Col>
        <Col sm="10" xs="10">
          <h4 className="loadId">#1263893488</h4>
          <p className="loadDetail">Flatbed • 10/26/2019 • 17:00</p>
        </Col>
      </Row>
    </div>
  </Container>
)

export default TodayLoads
