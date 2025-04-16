import React from 'react'

const RightSection = ({imageURL,productName, productDescription, link, linkName }) => {
  return (
    <div className='container mt-1 '>
        <div className="row">
        <div className='col-6' style={{padding: "180px 130px 30px 30px"}}>
                <h1>{productName}</h1>
                <p className='mt-4 lh-3' style={{lineHeight: "2"}}>{productDescription}</p>
                <div>
                    <a href={link}>{linkName} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>   
            </div>
            <div className='col-6 py-3' >
                <img src={imageURL} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default RightSection
