import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div className="container">
      <div className="row fs-3 text-center mb-5">
        <h1 className=""> People</h1>

      </div>
      <div className="row fs-3 text-center border-top p-5" >
       <div className="col-6 fs-6 p-4 text-center lh-lg text-body-secondary fw-semibold" >
            <img className='rounded-circle ml-4 mb-4' src="media/images/nithinKamath.jpg"  style={{width: "70%"}} alt="" />
            <h4>Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
       </div>
       <div className="col-6 fs-6 py-2 text-start lh-lg text-body-secondary mt-3"  >
        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        <p>Playing basketball is his zen.</p>
        <p>Connect on <Link> Homepage </Link> / <Link>TradingQnA</Link>  / <Link>Twitter</Link> </p>
       </div>
      </div>
    </div>
  )
}

export default Team
