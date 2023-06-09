import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { ProductItem } from '@/components/ProductItem'
import data from '@/utils/data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <h2 className='h2 my-4'>Latest Products</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {data.products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            //addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  )
}
