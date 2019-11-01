import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { Text } from 'Components/common'
import classnames from 'classnames'
import Assets from 'Assets'
import { useInjectSaga } from 'redux-injectors'
import { logoutRequest } from 'Store/auth/actions'
import { getLoads } from 'Store/loads/actions'
import { getLoadsSelector } from 'Store/loads/selectors'
import saga from './saga'
import TodayLoads from './TodayLoads'
import PastLoads from './PastLoads'
import './styles.scss'

const key = 'loads'

const LoadHistory = props => {
  useInjectSaga({ key, saga })

  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('1')
  useEffect(() => dispatch(getLoads({ status: 'AssignedNotDelivered,PickedUpNotDelivered' })), [])
  const loads = useSelector(getLoadsSelector)

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
    if (tab === '1') {
      dispatch(getLoads({ status: 'AssignedNotDelivered,PickedUpNotDelivered' }))
    } else if (tab === '2') {
      dispatch(getLoads({ status: 'Delivered' }))
    }
  }

  const onLogout = () => {
    // const { history } = props
    // history.push({
    //   pathname: '/login'
    // })
    dispatch(logoutRequest())
  }

  return (
    <div className="containerLoad d-flex flex-column">
      <div className="containerHeader d-flex flex-row justify-content-center align-items-center">
        <Text text="My Loads" className="flex-grow-1" />
        <button type="button" className="logOut" onClick={onLogout}>
          <img src={Assets.images.logoutIcon} className="imgLogout" />
        </button>
      </div>

      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1')
            }}
          >
            TODAY
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2')
            }}
          >
            PAST LOADS
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab} className="tabContent">
        <TabPane tabId="1">
          <TodayLoads data={loads} />
        </TabPane>
        <TabPane tabId="2">
          <PastLoads data={loads} />
        </TabPane>
      </TabContent>
    </div>
  )
}

export default LoadHistory
