import React from 'react'

export const Footer = () => {

  const d = new Date();
  return (
    <div className='text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200'>
        <h1>{d.getFullYear()} GoogLeo, Inc.</h1>
    </div>
  )
}
