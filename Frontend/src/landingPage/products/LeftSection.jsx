import React from 'react'

const LeftSection = ({imageURL, productName, productDescription, tryDemo, learnMore, goolePlay, appStore}) => {
  return (
    <div className='container mt-5 py-3'>
        <div className="row">
            <div className='col-6 p-3'>
                <img src={imageURL} alt="" />
            </div>
            <div className='col-6' style={{padding: "30px 30px 30px 170px"}}>
                <h1>{productName}</h1>
                <p className='mt-4 lh-3' style={{lineHeight: "2"}}>{productDescription}</p>
                <div>
                    <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} className='px-5'>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='mt-4'>

                <a href={goolePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                </div>
            </div>

        </div>
     
    </div>
  )
}

export default LeftSection
