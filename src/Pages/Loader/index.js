import React from 'react'
import { useSelector } from 'react-redux'
import { getFetchingSelector } from 'Store/loader/selectors'

const Loader = () => {
  const isFetching = useSelector(getFetchingSelector)

  if (!isFetching) {
    return null
  }
  return (
    <>
      <div className="loading" />
      <div className="loadingLayer" />
    </>
  )
}

export default Loader
