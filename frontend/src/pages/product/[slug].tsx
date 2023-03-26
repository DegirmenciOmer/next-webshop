import { useStoreContext } from '@/context/StoreContext'
import data, { Tproduct } from '@/utils/data'
import { CART_ADD_ITEM } from '@/utils/variables'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import Layout from '../../components/Layout'

function useProduct(slug?: string | string[]) {
  const { dispatch, state } = useStoreContext()
  const product = data.products.find((x: Tproduct) => x.slug === slug)

  const isSelected = state.cart.cartItems.some(
    (item: Tproduct) => item.slug === product?.slug
  )

  const addToCartHandler = useCallback(async () => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: { ...product, quantity: 1, selected: true },
    })
  }, [state])

  return { product, isSelected, addToCartHandler }
}

export default function ProductScreen() {
  const {
    query: { slug },
  } = useRouter()
  const { product, isSelected, addToCartHandler } = useProduct(slug)

  if (!product) {
    return <Layout title='Product Not Found'>Product Not Found</Layout>
  }

  return (
    <Layout title={product.name}>
      <div className='py-2 my-10'>
        <Link className='primary-button' href='/'>
          Back
        </Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className='text-lg'>{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className='card p-5'>
            <div className='mb-2 flex justify-between'>
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className='mb-2 flex justify-between'>
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button
              className='primary-button w-full'
              onClick={addToCartHandler}
              disabled={product.countInStock < 1 || isSelected}
            >
              {isSelected ? 'In Your Cart' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
