import React from 'react'
import { Badge } from 'reactstrap'
import { IconCircle, TextLoadTitle, TextSub } from 'Components/common'
import Assets from 'Assets'
import moment from 'moment'
import './styles.scss'

const ShowLess = ({ data }) => {
  const date = moment(data.appointmentTime).format('MMM DD, YYYY')
  const time = moment(data.appointmentTime).format('HH:mm')
  const containerPieceType = (data.chat && data.chat.containerPieceType) || 'None'
  const locationDropOff = data.dropOffLocation || 'None'
  const locationPickUp = data.pickUpLocation || 'None'
  return (
    <div className="contentLoad">
      <div className="arrowUp" />
      <div className="section sectionFirst">
        <div className="contentSection d-flex justify-content-between align-items-center">
          <TextLoadTitle text="Load #" />
          <TextLoadTitle text={data.load} style={{ fontSize: '24px' }} />
          {/* <p className="contentLoadId">{`#${data.load}`}</p>
          <IconCircle src={Assets.images.phoneIcon} /> */}
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
      </div>

      <div className="section">
        <div className="contentSection ">
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextLoadTitle text="Pick-up" />
            <IconCircle src={Assets.images.navigatorIcon} />
          </div>
          <div className="sectionItem d-flex justify-content-between align-items-center pb-0">
            <TextSub text={locationPickUp} className="loadAddress" />
          </div>
        </div>
        <div className="contentSection ">
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextSub text="Pick Up #" />
            <TextLoadTitle text={data.pickUp ? data.pickUp : 'None'} className="textSubRight" />
          </div>
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextSub text="Appointment #" />
            <TextLoadTitle text={data.appointment} className="textSubRight" />
          </div>
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextSub text="Reservation #" />
            <TextLoadTitle text={data.reservation} className="textSubRight" />
          </div>
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextSub text="Return Rail" />
            <TextLoadTitle text={data.returnRail || 'None'} className="textSubRight" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="contentSection ">
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextLoadTitle text="Drop-off" />
            <IconCircle src={Assets.images.navigatorIcon} />
          </div>
          <div className="sectionItem d-flex justify-content-between align-items-center pb-0">
            <TextSub text={locationDropOff} className="loadAddress" />
          </div>
        </div>
        <div className="contentSection ">
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextSub text="Container #" />
            <TextLoadTitle text={data.container || 'None'} className="textSubRight" />
          </div>
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextSub text="Rail Pick Up #" />
            <TextLoadTitle text={data.railPickUp || 'None'} className="textSubRight" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="contentSection ">
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextLoadTitle text="Notes" />
            {/* <IconCircle src={Assets.images.navigatorIcon} /> */}
          </div>
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextSub text={data.notes || 'No notes for this load'} className="loadAddress" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowLess
