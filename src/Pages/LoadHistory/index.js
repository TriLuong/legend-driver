import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import { Text } from 'Components/common'
import classnames from 'classnames'
import Assets from 'Assets'
import { useInjectSaga } from 'redux-injectors'
import { logoutRequest } from 'Store/auth/actions'
import { getLoads } from 'Store/loads/actions'
import { getLoadsSelector } from 'Store/loads/selectors'
import moment from 'moment'
import saga from './saga'
import TodayLoads from './TodayLoads'
import PastLoads from './PastLoads'
import './styles.scss'

const key = 'loads'

const LoadHistory = () => {
  useInjectSaga({ key, saga })

  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('1')
  const loads = useSelector(getLoadsSelector)
  const today = moment().format('dddd, MMM Do')

  useEffect(() => {
    dispatch(getLoads({ status: 'AssignedNotDelivered,PickedUpNotDelivered' }))
  }, [])

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
    if (tab === '1') {
      dispatch(getLoads({ status: 'AssignedNotDelivered,PickedUpNotDelivered' }))
    } else if (tab === '2') {
      dispatch(getLoads({ status: 'Delivered' }))
    }
  }

  const onLogout = () => {
    dispatch(logoutRequest())
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="containerHeader d-flex flex-row justify-content-center align-items-center">
        <Text text="My Loads" className="flex-grow-1" />
        <button type="button" className="logOut" onClick={onLogout}>
          <img src={Assets.images.logoutIcon} className="imgLogout" />
        </button>
      </div>

      <div className="containerNav d-flex flex-column">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1')
              }}
            >
              <div className={`dotNav ${activeTab === '1' ? 'activeDotNav' : ''}`} />
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
              <div className={`dotNav ${activeTab === '2' ? 'activeDotNav' : ''}`} />
              PAST LOADS
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab} className="tabContent">
          <TabPane tabId="1">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h4 className="headerDate">{activeTab === '1' ? today : ''}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <TodayLoads data={loads} />
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <PastLoads data={loads} />
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
}

export default LoadHistory
