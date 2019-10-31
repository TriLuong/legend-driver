import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTokenSelector } from 'Store/auth/selectors'
import './styles.scss'

const sourceChatbot = 'https://landbot.io/u/H-291303-WLRCM6ZR74RVGHGG/index.html'
const uriLogin = 'http://localhost:3000/login'

const Chatbot = props => {
  const [isLoading, setIsLoading] = useState(true)
  const { match } = props
  const { loadId } = match.params
  const token = useSelector(getTokenSelector)
  const srcIframe = `${sourceChatbot}?token=${token}&load_id=${loadId}&uri_login=${uriLogin}`

  const onLoad = () => {
    setIsLoading(false)
  }
  return (
    <div>
      {isLoading && (
        <>
          <div className="loading" />
          <div className="loadingLayer" />
        </>
      )}
      <iframe title="Chatbot" src={srcIframe} className="chatbot w-100 vh-100" onLoad={onLoad} />
    </div>
  )
}

export default Chatbot
