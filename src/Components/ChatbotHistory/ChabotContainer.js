import React from 'react'
import './landbot-2.2.0.css'

const ChatbotContainer = ({ children }) => (
  <div id="app-landbot">
    <div id="app-modules" className="rendered">
      <div
        id="gui"
        className="hu-zindex-2 hu-position-fixed hu-width-full hu-height-full hu-position-top-left hu-display-flex hu-flex-dir-column hu-overflow-hidden"
      >
        <section
          id="hu-body"
          className="hu-zindex-0 hu-display-flex hu-flex-1 hu-flex-dir-column hu-overflow-hidden"
        >
          <div
            id="hu-messenger"
            className="hu-display-flex hu-flex-1 hu-flex-dir-column hu-overflow-hidden"
          >
            <div id="hu-messages-container" className="hu-zindex-0 hu-flex-1 hu-overflow-auto">
              <div id="hu-header-mobile" className="hu-a-center hu-m-display-none">
                <h1 className="hu-header-brand_name hu-w-bold hu-s-23 invisible">calibrated</h1>
                <p className="hu-header-tagline hu-s-13 hu-color_header-text hu-margin-0-auto" />
              </div>
              <div className="hu-messages-wrapper">{children}</div>
            </div>
          </div>
        </section>
        <footer
          id="hu-footer"
          style={{ height: '50px' }}
          styelclassName="hu-m-display-flex hu-align-center hu-justify-center"
        >
          <div className="hu-powered-by hu-a-center hu-height-auto" />
        </footer>
      </div>
    </div>
  </div>
)

export default ChatbotContainer
