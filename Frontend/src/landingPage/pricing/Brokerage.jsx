import React from 'react'

const Brokerage = () => {
  return (
    <div className="container">
   
    <div className="row p-5 mt-5 border-top">
      <div className="col-8">
           <a href=""> <h3 className='fs-5 text-center'>Brokerage calculator</h3></a>
           <ul className='text-muted' style={{lineHeight: '2' , fontSize: ".9rem"}}>
            <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For MRI account (non-PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order palced will be charged ₹40 per executed instead of ₹20 per executed order. </li>
           </ul>
      </div>
      <div className="col-4 text-center">
            <a href=""> <h3 className='fs-5'>List of charges</h3></a>
      </div>
    </div>
  </div>
  )
}

export default Brokerage
