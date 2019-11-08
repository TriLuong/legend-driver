import React from 'react'
import { Badge } from 'reactstrap'
import { IconCircle, TextLoadTitle, TextSub } from 'Components/common'
import Assets from 'Assets'
import moment from 'moment'
import './styles.scss'

const Detail = ({ data }) => {
  console.log('Deatil', data)
  const date = moment(data.appointmentTime).format('MMM DD, YYYY')
  const time = moment(data.appointmentTime).format('HH:mm')
  const containerPieceType = data.chat.containerPieceType || 'None'
  const locationDropOff = data.dropOffLocation || 'None'
  const locationPickUp = data.pickUpLocation || 'None'
  return (
    <div className="contentLoad">
      <div className="contentSection d-flex justify-content-between align-items-center">
        <p className="contentLoadId">{`#${data.reservation}`}</p>
        <IconCircle src={Assets.images.phoneIcon} />
      </div>
      <div className="contentSection ">
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextLoadTitle text="Type" />
          <Badge color="primary" className="loadType">
            {containerPieceType}
          </Badge>
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextLoadTitle text="Date" />
          <TextSub text={date} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextLoadTitle text="Time" />
          <TextSub text={time} />
        </div>
      </div>
      <div className="contentSection ">
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextLoadTitle text="Pick-up location" />
          <IconCircle src={Assets.images.navigatorIcon} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text={locationPickUp} className="loadAddress" />
        </div>
      </div>
      <div className="contentSection ">
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextLoadTitle text="Drop-off location" />
          <IconCircle src={Assets.images.navigatorIcon} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text={locationDropOff} className="loadAddress" />
        </div>
      </div>
    </div>
  )
}

export default Detail
