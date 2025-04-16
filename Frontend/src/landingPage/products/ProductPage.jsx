import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection 
          imageURL="media/images/kite.png" 
          productName="Kite"
          productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          goolePlay=""
          appStore=""
          />
         <RightSection 
          imageURL="media/images/console.png" 
          productName="Console"
          productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          linkName="Learn more"
          link=""
         />
      <LeftSection 
          imageURL="media/images/coin.png" 
          productName="Coin"
          productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          goolePlay=""
          appStore=""
          />
     <RightSection 
          imageURL="media/images/kiteconnect.png" 
          productName="Kite Connect API"
          productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          linkName="Kite Connect "
          link=""
         />
      <LeftSection 
          imageURL="media/images/varsity.png" 
          productName="Varsity"
          productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          goolePlay=""
          appStore=""
          />
          <h5 className='text-center'>
          Want to know more about our technology stack? Check out the <a href=""> Zerodha.tech</a> blog.
          </h5>
      <Universe />
    </div>
  )
}

export default ProductPage
