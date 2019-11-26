import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTokenSelector } from 'Store/auth/selectors'
import './styles.scss'

// const sourceChatbot = 'https://landbot.io/u/H-297057-UGLBFFN2ZS6ZXU6D/index.html'
const sourceChatbot = 'https://landbot.io/u/H-313201-PX6E2Y95IVBZAPJG/index.html'
const uri = 'http://legend-staging-driver.web.app'

const Chatbot = props => {
  const [isLoading, setIsLoading] = useState(true)
  const { match } = props
  const { loadId } = match.params
  const token = useSelector(getTokenSelector)
  const srcIframe = `${sourceChatbot}?token=${token}&load_id=${loadId}&uri=${uri}`

  const onLoad = () => {
    setIsLoading(false)
  }
  return (
    <>
      {isLoading && (
        <>
          <div className="loading" />
          <div className="loadingLayer" />
        </>
      )}
      <iframe title="Chatbot" src={srcIframe} className="chatbot w-100 vh-100" onLoad={onLoad} />
    </>
  )
}

export default Chatbot
