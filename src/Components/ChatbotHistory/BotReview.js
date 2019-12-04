import React from 'react'
import Bot from './Bot'
import User from './User'

const BotReview = ({ question, answer, isVisible = true, imageSrc }) => (
  <>
    <Bot text={question} isVisible={isVisible} />
    {(answer || imageSrc) && <User text={answer} imageSrc={imageSrc} />}
  </>
)

export default BotReview
