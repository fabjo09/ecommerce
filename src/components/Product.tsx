import React from 'react'
import type { Product } from "../types/ProductType"
import Link from 'next/link'
import { urlFor } from '@/lib/client'

interface Props {
  product: Product;
}

const Product: React.FC<Props> = ({ product : {image, slug, price, name} }) => {

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img 
            src={urlFor(image && image[0]).url()}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>{price}$</p>
        </div>

      </Link>
    </div>


  )
}

export default Product