import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import DataList from 'Components/DataList'

const TodayLoads = props => {
  const { data } = props
  return (
    <Container>
      <Row>
        <Col sm="12">
          <h4 className="headerDate">Wednesday-Oct-15th</h4>
        </Col>
      </Row>
      <div className="containerLoadItems">
        {data && data.map(item => <DataList key={item.id} data={item} />)}
        <Link to="/loadDetail/asdasd" className="row loadItemLink">
          <div className="col-2">ADSD</div>
          <div className="col-10">
            <h4 className="loadId">SADFSDF</h4>
            <p className="loadDetail">SDSAFDDS</p>
          </div>
        </Link>
      </div>
    </Container>
  )
}

export default TodayLoads
