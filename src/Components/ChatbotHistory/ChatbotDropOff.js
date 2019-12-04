import React from 'react'
import ChatbotContainer from './ChabotContainer'
import BotReview from './BotReview'
import './landbot-2.2.0.css'

const ChatbotDropOff = ({ data }) => {
  const loadChat = data.chat
  const imgSrc = loadChat.podImageUrl

  return (
    <ChatbotContainer>
      <BotReview question="Hi there!" isVisible={false} />
      <BotReview question="Welcome to our site.🤗" answer="Hi" />
      <BotReview question="Picking Up or Dropping Off" answer="Dropping Off" />
      <BotReview question="Chassis # ?" answer={loadChat.chassis} />
      <BotReview question="Upload the POD" imageSrc={imgSrc} />
      <BotReview question="Mission Accomplised!!!" />
    </ChatbotContainer>
  )
}

export default ChatbotDropOff
