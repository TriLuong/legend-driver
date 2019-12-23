import React from 'react'
import ChatbotContainer from './ChabotContainer'
import BotReview from './BotReview'
import './landbot-2.2.0.css'

const ChatbotPickUp = ({ data }) => {
  const loadChat = data.chat
  const imgsSrc = loadChat.bolImageUrls
  let containerType = ''
  if (loadChat.isDropAndHookLoad === 1) {
    if (loadChat.containerType === 'LoadDropped') {
      containerType = 'Load dropped, empty pulled to Reload'
    } else {
      containerType = 'Empty dropped - Load pulled'
    }
  }
  return (
    <ChatbotContainer>
      <BotReview question="Hi there!" isVisible={false} />
      <BotReview question="Welcome to our site.🤗" answer="Hi" />
      <BotReview question="Picking Up or Dropping Off" answer="Picking Up" />
      <BotReview question="Container # ?" answer={loadChat.container} />
      <BotReview
        question="Is this a Drop and Hook load?"
        answer={loadChat.isDropAndHookLoad ? 'Yes' : 'No'}
      />
      {loadChat.isDropAndHookLoad === 1 && (
        <BotReview question={`What is Container #${loadChat.container}?`} answer={containerType} />
      )}
      {imgsSrc.map((imgSrc, index) => (
        <>
          <BotReview key={imgSrc} question="Upload the BOL" imageSrc={imgSrc} />
          <BotReview
            question="Do you have more BOL images to upload?"
            answer={index === imgsSrc.length - 1 ? 'No' : 'Yes'}
          />
        </>
      ))}
      <BotReview question="Chassis # ?" answer={loadChat.chassis} />
      <BotReview question="Piece Count ?" answer={loadChat.containerPieceCount} />
      {/* <BotReview question="Piece ?" answer={loadChat.containerPiece} /> */}
      <BotReview question="Piece Type ?" answer={loadChat.containerPieceType} />
      <BotReview question="Weight (lbs) ?" answer={loadChat.containerWeight} />
      <BotReview question="Seal ?" answer={loadChat.containerSealNumber} />
      <BotReview
        question="Let us know when you get to the drop off location ?"
        answer={loadChat.problem === 'Here' ? 'Here' : 'Problem'}
      />
      {loadChat.problem !== 'Here' && (
        <BotReview question="Type your problem:" answer={loadChat.problem} />
      )}
      <BotReview question="Done !" />
    </ChatbotContainer>
  )
}

export default ChatbotPickUp
