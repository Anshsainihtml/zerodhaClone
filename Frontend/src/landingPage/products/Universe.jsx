import React from 'react'

const Universe = () => {
  return (
    <div className='container mt-5'>
          <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p className='mb-5 mt-4'>Extend your trading and investment exprience even further with our partner platforms</p>
                <div className='col-4' >
                    <img src="media/images/smallcaseLogo.png" alt="" />
                    <p className='text-small text-muted py-4 px-5' style={{fontSize: "0.8rem"}}>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4'>
                <img src="media/images/zerodhaFundhouse.png" style={{width: "10rem"}} alt="" />
                <p className='text-small text-muted py-4 px-5' style={{fontSize: "0.8rem"}} >Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
                </div>
                <div className='col-4'>
                <img src="media/images/sensibullLogo.svg" style={{width: "11rem"}} alt="" />
                <p className='text-muted py-4 px-5' style={{fontSize: "0.8rem"}}>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                </div>
                <div className='col-4'>
                <img src="media/images/streakLogo.png" style={{width: "9rem"}} alt="" />
                <p className='text-small text-muted py-4 px-5' style={{fontSize: "0.8rem"}}>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
                </div>
                <div className='col-4'>
                <img src="media/images/dittoLogo.png" style={{width: "9rem"}} alt="" />
                <p className='text-small text-muted py-4 px-5' style={{fontSize: "0.8rem"}}>Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
                </div>
                <div className='col-4'>
                <img src="media/images/tijori.svg" style={{width: "9rem"}}   alt="" />
                <p className='text-small text-muted py-4 px-5' style={{fontSize: "0.8rem"}}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
          </div>
    </div>
  )
}

export default Universe
