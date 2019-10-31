import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Assets from 'Assets'
import './styles.scss'

const DataList = ({ data }) => {
  const date = moment(data.appointmentTime).format('MM/DD/YYYY')
  const time = moment(data.appointmentTime).format('HH:mm')
  const containerType = data.containerType || 'None'
  return (
    <Link to={`/loadDetail/${data.id}`} className="row loadItemLink">
      <div className="col-2">
        <img src={Assets.images.loadLeftIcon} />
      </div>
      <div className="col-10">
        <h4 className="loadId">{`#${data.container}`}</h4>
        <p className="loadDetail">{`${containerType} • ${date} • ${time}`}</p>
      </div>
    </Link>
  )
}

export default DataList
