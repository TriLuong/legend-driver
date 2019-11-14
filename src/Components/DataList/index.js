import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'reactstrap'
import moment from 'moment'
import Assets from 'Assets'
import './styles.scss'

const DataList = ({ data }) => {
  const date = moment(data.appointmentTime).format('MM/DD/YYYY')
  const time = moment(data.appointmentTime).format('HH:mm')
  const containerType = data.containerType || 'None'

  const checkStatus = status => {
    switch (status) {
      case 'PickedUpNotDelivered': {
        const text = 'Picked Up'
        const color = 'var(--picked-up)'
        return { text, color }
      }
      case 'Delivered': {
        const text = 'Delivered'
        const color = 'var(--delivered-load)'
        return { text, color }
      }
      default: {
        const text = 'New'
        const color = 'var(--new-load)'
        return { text, color }
      }
    }
  }

  const status = checkStatus(data.status)
  return (
    <Link to={`/loadDetail/${data.id}`} className="row loadItemLink">
      <div className="col-2">
        <img src={Assets.images.loadLeftIcon} />
      </div>
      <div className="col-7">
        <h4 className="loadId">{`#${data.reservation}`}</h4>
        <p className="loadDetail">{`${containerType} • ${date} • ${time}`}</p>
      </div>
      <div className="col-3 statusContainer">
        <p className="loadDetail statusText" style={{ color: status.color }}>
          {status.text}
        </p>
      </div>
    </Link>
  )
}

export default DataList
