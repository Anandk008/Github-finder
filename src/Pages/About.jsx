import React from 'react'

function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='mb-4 text-2xl font-light'>
        It's a part of the course which I am following.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span >1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:  
        <a href='https://twitter.com/hassibmoddasser'>
            Hassib Moddasser
        </a>
      </p>
    </>
  )
}

export default About