import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getTokenSelector } from 'Store/auth/selectors'
import './styles.scss'

const sourceChatbot = 'https://landbot.io/u/H-310846-MZ2GMB47B885EUIR/index.html'
const uri = 'http://legend-staging-driver.web.app'

const Chatbot = props => {
  const [isLoading, setIsLoading] = useState(true)
  const { match } = props
  const { loadId } = match.params
  const token = useSelector(getTokenSelector)
  const srcIframe = `${sourceChatbot}?token=${token}&load_id=${loadId}&uri=${uri}`
  console.log(token)
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
