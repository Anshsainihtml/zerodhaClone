import React from 'react'

const Awards = () => {
  return (
    <div className='container p-5 mt-5'>
        <div className='row'>
              <div className='col-6'>
                      <img src="media/images/largestBroker.svg" alt="" />
              </div>
              <div className='col-6 p-5 mt-3' >
                  <h1>Largest stock broken in India</h1>
                  <p>
                    2+ million Zerodha clients contribute to over 15%
                    of all volumes in India daily by trading and investing in: 
                  </p>
                  <div className='row'>
                  <div className='col-6'>
                  <ul>
                    <li>
                      <p>Futures and Options</p>
                    </li>
                    <li>
                      <p>Commedity derivatives</p>
                    </li>
                    <li>
                      <p>currency derivatives</p>
                    </li>
                    </ul>
                  </div>
                  <div className='col-6'>
                      <ul>
                      <li>
                      <p>Stocks & IOPs</p>
                       </li>
                      <li>
                         <p>Direct mutual funds</p>
                       </li> 
                      <li>
                         <p>Bonds and Govt. Securities</p>
                       </li> 
                      </ul>
                  </div>
                  <img src="media/images/pressLogos.png" alt="" width={{width:"90%"}} />
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Awards
