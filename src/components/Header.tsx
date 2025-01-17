import Link from 'next/link'
import React from 'react'

interface Banner {
  image: {
    asset: {
      _ref: string; // Reference to the image asset
      _type: 'reference';
    };
  };
  buttonText: string;
  product: {
    _ref: string; // Reference to the linked product
    _type: 'reference';
  };
  desc: string;
  smallText?: string;
  midText?: string;
  largeText1: string;
  largeText2?: string;
  discount: string;
  saleTime: string;
}

interface Props {
  heroBanner: Banner;
}

const Header: React.FC<Props> = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>Mid Text</h3>
        <img src='' alt='headphones' className='hero-banner-image'/>

        <div>
          <Link href="/product/ID">
            <button type='button'>Click Me</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>



    </div>
  )
}



export default Header