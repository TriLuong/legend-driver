import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from 'reactstrap'
import { IconCircle, TextLoadTitle, TextSub } from 'Components/common'
import { getLoadByIdSelector } from 'Store/loadById/selectors'
import Assets from 'Assets'
import moment from 'moment'
import './styles.scss'

const ShowMore = () => {
  const data = useSelector(getLoadByIdSelector)

  const date = moment(data.appointmentTime).format('MMM DD, YYYY')
  const time = moment(data.appointmentTime).format('HH:mm')
  const containerPieceType = (data.chat && data.chat.containerPieceType) || 'None'
  const locationDropOff = data.dropOffLocation || 'None'
  const locationPickUp = data.pickUpLocation || 'None'
  return (
    <div className="contentLoad">
      <div className="contentSection d-flex justify-content-between align-items-center">
        <p className="contentLoadId">{`#${data.load}`}</p>

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
          <TextLoadTitle text="Pick-up" />
          <IconCircle src={Assets.images.navigatorIcon} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Location" isTitle />
          <TextSub text={locationPickUp} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="BOL Image" isTitle />
          <a
            href={data.chat.bolImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linkImageLoad"
          >
            Show Image
          </a>
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Drop And Hook Load" isTitle />
          <TextSub text={data.chat.isDropAndHookLoad ? 'Yes' : 'No'} />
        </div>
        {data.chat.isDropAndHookLoad && (
          <div className="sectionItem d-flex justify-content-between align-items-center">
            <TextSub text="Container Type" isTitle />
            <TextSub text={data.chat.containerType} />
          </div>
        )}
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Container #" isTitle />
          <TextSub text={data.chat.container} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Piece" isTitle />
          <TextSub text={data.chat.containerPiece} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Piece Count" isTitle />
          <TextSub text={data.chat.containerPieceCount} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Seal #" isTitle />
          <TextSub text={data.chat.containerSealNumber} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Weight (lbs)" isTitle />
          <TextSub text={data.chat.containerWeight} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Problem" isTitle />
          <TextSub text={data.chat.problem === 'Here' ? 'None' : data.chat.problem} />
        </div>
      </div>

      <div className="contentSection ">
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextLoadTitle text="Drop-off" />
          <IconCircle src={Assets.images.navigatorIcon} />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Location" className="loadAddress" isTitle />
          <TextSub text={locationDropOff} className="loadAddress" />
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="POD Image" isTitle />
          <a
            href={data.chat.podImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linkImageLoad"
          >
            Show Image
          </a>
        </div>
        <div className="sectionItem d-flex justify-content-between align-items-center">
          <TextSub text="Delivery #" className="loadAddress" isTitle />
          <TextSub text={data.chat.delivery} className="loadAddress" />
        </div>
      </div>
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
  )
}

export default ShowMore
