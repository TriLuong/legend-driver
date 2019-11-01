import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectSaga } from 'redux-injectors'
import saga from 'Pages/LoadHistory/saga'
import { getLoadById } from 'Store/loads/actions'
import { getLoadsSelector } from 'Store/loads/selectors'
import { Badge } from 'reactstrap'
import { IconCircle, TextLoadTitle, TextSub, Button } from 'Components/common'
import Detail from 'Components/Detail'
import Assets from 'Assets'
import './styles.scss'

const key = 'loadDetail'

const LoadDetail = props => {
  useInjectSaga({ key, saga })
  const { match } = props
  const loadId = match.params.loadId
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLoadById(loadId))
  }, [])
  const loadById = useSelector(getLoadsSelector)

  const onClick = loadId => {
    const { history } = props
    history.push({
      pathname: `/chatbot/${loadId}`
    })
  }
  return (
    <div className="containerLoadDetail">
      <div className="containerContentLoad">
        <img src={Assets.images.loadLeftIcon} />
        {loadById && (
          <>
            <Detail data={loadById} />
            {loadById.status !== 'Delivered' && (
              <Button text="Accept Load" onClick={() => onClick(loadId)} className="mb-2" />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default LoadDetail
