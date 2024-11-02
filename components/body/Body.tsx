import React from 'react'
import MenuWrapper from './MenuWrapper'
import Cart from './Cart'

const Body = () => {
  return (
    <div className='flex'>
      <MenuWrapper />
      <Cart />
    </div>
  )
}

export default Body