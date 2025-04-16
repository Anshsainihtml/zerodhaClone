import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
        <div className='row text-center'>
          <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5' />
          <h1 className='mt-5'>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
          <button className='p-2 btn btn-primary fs' style={{width: '30%', margin: 'auto'}}>Signup Now</button>
        </div>
    </div>
  )
}

export default Hero
