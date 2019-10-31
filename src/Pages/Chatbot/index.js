import React from 'react'
import { useSelector } from 'react-redux'
import { getTokenSelector } from 'Store/auth/selectors'
import { getFetchingSelector } from 'Store/loader/selectors'

import { getStore } from 'Store/Store'
import './styles.scss'

const sourceChatbot = 'https://landbot.io/u/H-291303-WLRCM6ZR74RVGHGG/index.html'

const Chatbot = props => {
  const { match } = props
  const { loadId } = match.params
  const token = useSelector(getTokenSelector)
  // const store = getStore()
  // const token = store.getState().authReducer.token
  console.log(token)

  const srcIframe = `${sourceChatbot}?token=${token}&load_id=${loadId}`
  return (
    <div>
      <iframe title="Chatbot" src={srcIframe} className="chatbot w-100 vh-100" />
    </div>
  )
}

export default Chatbot
