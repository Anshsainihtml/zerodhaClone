import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid ' id='supportHero'>
        <div className='py-5 mt-5 '  id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
        </div>
        
        <div className='row px-5 mx-5'>
            <div className='col-6 '>
                <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
                <input  placeholder='Eg. how do I activate F&O' />
                <div className='py-3' style={{lineHeight: "2.3"}}>
                <a href="" className='text-light' > Track account opening</a>
                <a href="" className='text-light'> Track segment activation </a>
                <a href="" className='text-light'> Intraday margins </a>
                <a href="" className='text-light'> Kite user manual</a>
                </div>
            </div>
               <div className='col-6 p-5 mt-5 mb-5 '>
                <h1 className='fs-5'>Featured</h1>
                <ol >
             <li>  <a href=""> Surveillance measure on scrips - March 2025</a></li>
              <li> <a href=""> Rights Entitlements listing in March 2025</a></li>
                </ol>
               </div>
        </div>
        
    </section>
  )
}

export default Hero
