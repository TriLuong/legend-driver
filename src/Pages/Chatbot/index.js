import React from 'react'
import { useSelector } from 'react-redux'
import { getTokenSelector } from 'Store/auth/selectors'
import './styles.scss'

const sourceChatbot = 'https://landbot.io/u/H-291303-WLRCM6ZR74RVGHGG/index.html'

const Chatbot = props => {
  console.log(props)
  const { match } = props
  // const { params } = history.match
  const { loadId } = match.params
  const token = useSelector(getTokenSelector)
  console.log(token, loadId)

  const srcIframe = `${sourceChatbot}?token=${token}${loadId}`
  return (
    <div>
      <iframe title="Chatbot" src={srcIframe} className="chatbot w-100 vh-100" />
    </div>
  )
}

export default Chatbot
