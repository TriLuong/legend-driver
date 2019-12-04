import React from 'react'
import ChatbotContainer from './ChabotContainer'
import BotReview from './BotReview'
import './landbot-2.2.0.css'

const NoChatHistory = () => (
  <ChatbotContainer>
    <BotReview question="Hi there!" isVisible={false} />
    <BotReview question="No chatbot History!" isVisible={false} />
    <BotReview question="Please GO BACK and complete pick up or drop off form !!!" />
  </ChatbotContainer>
)

export default NoChatHistory
