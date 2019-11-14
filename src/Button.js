import React from 'react'

export default ({ children, config }) => {

  if (config?.foo) {
    console.log('test')
  }

  return (
    <button>
      {children}
    </button>
  )
}