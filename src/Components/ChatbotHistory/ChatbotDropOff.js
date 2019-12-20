import React from 'react'
import ChatbotContainer from './ChabotContainer'
import BotReview from './BotReview'
import './landbot-2.2.0.css'

const ChatbotDropOff = ({ data }) => {
  const loadChat = data.chat
  const imgsSrc = loadChat.podImageUrls

  return (
    <ChatbotContainer>
      <BotReview question="Hi there!" isVisible={false} />
      <BotReview question="Welcome to our site.🤗" answer="Hi" />
      <BotReview question="Picking Up or Dropping Off" answer="Dropping Off" />
      {/* <BotReview question="Delivery # ?" answer={loadChat.delivery} /> */}
      {imgsSrc.map((imgSrc, index) => (
        <>
          <BotReview key={imgSrc} question="Upload the POD" imageSrc={imgSrc} />
          <BotReview
            question="Do you want to upload more POD image?"
            answer={index === imgsSrc.length - 1 ? 'No' : 'Yes'}
          />
        </>
      ))}
      <BotReview question="Mission Accomplised!!!" />
    </ChatbotContainer>
  )
}

export default ChatbotDropOff
