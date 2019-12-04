import React from 'react'
import ChatbotContainer from './ChabotContainer'
import BotReview from './BotReview'
import './landbot-2.2.0.css'

const ChatbotPickUp = ({ data }) => {
  const loadChat = data.chat
  const imgSrc = loadChat.bolImageUrl

  return (
    <ChatbotContainer>
      <BotReview question="Hi there!" isVisible={false} />
      <BotReview question="Welcome to our site.🤗" answer="Hi" />
      <BotReview question="Picking Up or Dropping Off" answer="Picking Up" />
      <BotReview question="Upload the BOL" imageSrc={imgSrc} />
      <BotReview
        question="Is this a Drop and Hook load?"
        answer={loadChat.isDropAndHookLoad ? 'Yes' : 'No'}
      />

      {loadChat.isDropAndHookLoad && (
        <BotReview question="What is Container 1#?" answer="Load dropped, empty" />
      )}
      <BotReview question="Container # ?" answer={loadChat.container} />
      <BotReview question="Chassis # ?" answer={loadChat.chassis} />
      <BotReview question="Piece Count ?" answer={loadChat.containerPieceCount} />
      <BotReview question="Piece ?" answer={loadChat.containerPiece} />
      <BotReview question="Piece Type ?" answer={loadChat.containerPieceType} />
      <BotReview question="Weight (lbs) ?" answer={loadChat.containerWeight} />
      <BotReview question="Seal ?" answer={loadChat.containerSealNumber} />
      <BotReview
        question="Let us know when you get to the drop off location ?"
        answer={loadChat.problem}
      />
      <BotReview question="Done !" />
    </ChatbotContainer>
  )
}

export default ChatbotPickUp
