import React from 'react'

const User = ({ text, imageSrc, time = '16:00' }) => (
  <div className="hu-message user animate splitter" style={{ height: 'auto' }}>
    <div className="hu-message-container">
      <div className="hu-message-margin">
        <div className="hu-message-info visible">
          <div className="hu-message-date hu-a-center hu-s-10 hu-color_contrast">
            <span>{time}</span>
          </div>
        </div>
        <div className="hu-message-content">
          <div className="hu-message-bubble hu-position-relative hu-background-color_user-message-background">
            {text && (
              <p
                className="hu-message-text hu-color_user-message-text"
                style={{ display: 'inline-block', opacity: 1 }}
              >
                {text}
              </p>
            )}
            {imageSrc && <img src={imageSrc} />}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default User
