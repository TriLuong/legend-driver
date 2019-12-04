import React from 'react'

const Bot = ({ text, isVisible = true, time = '16:00' }) => (
  <div className="hu-message brand animate left-in">
    <div className="hu-message-container">
      <div className="hu-message-margin">
        <div className={`hu-message-info ${isVisible ? 'visible' : ''}`}>
          <div className="hu-message-avatar none">
            <div
              className="hu-message-avatar_img hu-background-contain hu-width-full hu-height-full"
              style={{
                backgroundImage:
                  'url('
                  + 'https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png'
                  + ')'
              }}
            />
          </div>
          <div className="hu-message-date hu-a-center hu-s-10 hu-color_contrast">
            <span>{time}</span>
          </div>
        </div>
        <div className="hu-message-content">
          <div
            className="hu-message-bubble hu-position-relative hu-background-color_bot-message-background"
            style={{ width: 'auto', height: 'auto' }}
          >
            <p
              className="hu-message-text hu-color_bot-message-text"
              style={{ display: 'inline-block', opacity: 1 }}
            >
              <div className="hu-rich_text">
                <p>{text}</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Bot
