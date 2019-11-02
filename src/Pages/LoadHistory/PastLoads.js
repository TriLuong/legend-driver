import React from 'react'
import DataList from 'Components/DataList'

const PastLoads = ({ data }) => (
  <div className="containerLoadItems">
    {data && data.map(item => <DataList key={item.id} data={item} />)}
  </div>
)

export default PastLoads
