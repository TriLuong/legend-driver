import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoadById } from 'Store/loadById/actions'
import { getLoadByIdSelector } from 'Store/loadById/selectors'
import { NoChatHistory, ChatbotPickUp, ChatbotDropOff } from 'Components/ChatbotHistory'

const ChatbotHistory = props => {
  const { match } = props
  const loadId = match.params.loadId
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLoadById(loadId))
  }, [])

  const loadById = useSelector(getLoadByIdSelector)
  const loadChat = loadById.chat

  if (!loadChat) {
    return <NoChatHistory />
  }

  const loadType = loadChat.type

  return (
    <>
      {loadType === 'PickUp' ? (
        <ChatbotPickUp data={loadById} />
      ) : (
        <ChatbotDropOff data={loadById} />
      )}
    </>
  )
}

export default ChatbotHistory
