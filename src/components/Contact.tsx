import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-40'>
      <div className='mx-4'>
        <h1 className='text-5xl text-white text-center'>Contact Me</h1>
          <p className='text-lg text-white text-center pt-6'>
              Feel free to send me a message 
              <a href="mailto:aaronsweet10@gmail.com" target="_blank" className='text-blue-400 px-1'>
                  Here.
              </a> 
              I'll try to respond as quick as I can.
          </p>
      </div>

    </section>
  )
}

export default Contact