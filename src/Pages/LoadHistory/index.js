import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import { Text } from 'Components/common'
import classnames from 'classnames'
import Assets from 'Assets'
import { useInjectSaga } from 'redux-injectors'
import { logoutRequest } from 'Store/auth/actions'
import { getLoads } from 'Store/loads/actions'
import saga from 'Pages/Login/saga'
import sagaLoads from './saga'
import { getLoadsSelector } from 'Store/loads/selectors'
import TodayLoads from './TodayLoads'
import './styles.scss'

const key = 'logout'
const keyLoads = 'loads'

const LoadHistory = () => {
  useInjectSaga({ key, saga })
  useInjectSaga({ key: keyLoads, saga: sagaLoads })

  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('1')
  useEffect(() => dispatch(getLoads()), [])
  const loads = useSelector(getLoadsSelector)
  console.log(loads)

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const onLogout = () => {
    dispatch(logoutRequest())
  }

  return (
    <div className="containerLoad d-flex flex-column">
      <div className="containerHeader d-flex flex-row justify-content-between align-items-center">
        <Text text="My Loads" />
        <a href="#" className="logOut" onClick={onLogout}>
          <img src={Assets.images.logoutIcon} className="imgLogout" />
        </a>
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
          <TodayLoads />
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Tab 2 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default LoadHistory
