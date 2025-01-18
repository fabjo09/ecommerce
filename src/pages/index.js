import React from 'react'
import {Header, FooterBanner, Product} from '../components'
import {client} from '../lib/client'
const Home = ({products, banners}) => {
  return (
    <div>
      <Header heroBanner={banners.length && banners[0]} />

      <div className='products-heading'>
        <h2>
        Best Selling Products
        </h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => 
          <Product 
            key={product._id}
            product={product}
          />    
          )}
      </div>

      <FooterBanner footerBanner={banners && banners[0]}/>
    </div>
  )
}


export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]'
  const products = await client.fetch(productQuery)

  const postQuery = '*[_type == "post"]'
  const posts = await client.fetch(postQuery)

  const bannerQuery = '*[_type == "banner"]'
  const banners = await client.fetch(bannerQuery)

  return {
    props: {
      products, posts, banners
    }
  }
}

export default Home