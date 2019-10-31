import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'reactstrap'
import { IconCircle, TextLoadTitle, TextSub, Button } from 'Components/common'
import Assets from 'Assets'
import './styles.scss'

const LoadDetail = props => {
  const onClick = loadId => {
    const { history } = props
    history.push({
      pathname: `/chatbot/${loadId}`
    })
  }
  return (
    <div className="containerLoadDetail">
      {/* <div className="headerLoadDetail d-flex flex-row justify-content-between align-items-center">
      <Link to="/">
        <img src={Assets.images.backIcon} />
      </Link>
      <p className="loadID">#123456789</p>
      <div>
        <img src={Assets.images.threeDots} />
      </div>
    </div> */}
      <div className="containerContentLoad">
        <img src={Assets.images.loadLeftIcon} />
        <div className="contentLoad">
          <div className="contentSection d-flex justify-content-between align-items-center">
            <p className="contentLoadId">#123456789</p>
            <IconCircle src={Assets.images.phoneIcon} />
          </div>
          <div className="contentSection ">
            <div className="sectionItem d-flex justify-content-between align-items-center">
              <TextLoadTitle text="Type" />
              <Badge color="primary" className="loadType">
                Platbed
              </Badge>
            </div>
            <div className="sectionItem d-flex justify-content-between align-items-center">
              <TextLoadTitle text="Date" />
              <TextSub text="October 15, 2019" />
            </div>
            <div className="sectionItem d-flex justify-content-between align-items-center">
              <TextLoadTitle text="Time" />
              <TextSub text="17:00" />
            </div>
          </div>
          <div className="contentSection ">
            <div className="sectionItem d-flex justify-content-between align-items-center">
              <TextLoadTitle text="Pick-up location" />
              <IconCircle src={Assets.images.navigatorIcon} />
            </div>
            <div className="sectionItem d-flex justify-content-between align-items-center">
              <TextSub
                text="07 Weimann Camp Apt. 242 New York, United States"
                className="loadAddress"
              />
            </div>
          </div>
          <div className="contentSection ">
            <div className="sectionItem d-flex justify-content-between align-items-center">
              <TextLoadTitle text="Drop-off location" />
              <IconCircle src={Assets.images.navigatorIcon} />
            </div>
            <div className="sectionItem d-flex justify-content-between align-items-center">
              <TextSub
                text="07 Weimann Camp Apt. 242 New York, United States"
                className="loadAddress"
              />
            </div>
          </div>
        </div>
        <Button text="Accept Load" onClick={() => onClick('xhBckujjYbS9muqWW5040GCodVB2')} />
      </div>
    </div>
  )
}

export default LoadDetail
