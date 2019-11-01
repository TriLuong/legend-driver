import React from 'react'
import { Container } from 'reactstrap'
import DataList from 'Components/DataList'

const PastLoads = ({ data }) => (
  <Container>
    <div className="containerLoadItems">
      {data && data.map(item => <DataList key={item.id} data={item} />)}
    </div>
  </Container>
)

export default PastLoads
