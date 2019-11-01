import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import DataList from 'Components/DataList'
import moment from 'moment'

const TodayLoads = ({ data }) => {
  const today = moment().format('dddd, MMM Do')
  return (
    <Container>
      <Row>
        <Col sm="12">
          <h4 className="headerDate">{today}</h4>
        </Col>
      </Row>
      <div className="containerLoadItems">
        {data && data.map(item => <DataList key={item.id} data={item} />)}
      </div>
    </Container>
  )
}

export default TodayLoads
