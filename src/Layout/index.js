import React from 'react'

const Layout = ({ className, children }) => (
  <div className={className} style={{ position: 'relative', minHeight: '100vh' }}>
    {children}
  </div>
)

export default Layout
