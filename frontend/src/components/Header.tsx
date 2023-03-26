import { useStoreContext } from '@/context/StoreContext'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { state } = useStoreContext()
  console.log(state.cart.cartItems.length)

  return (
    <header>
      <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
        <Link className='text-lg font-bold' href='/'>
          Next Webshop
        </Link>
        <div>
          <Link className='p-2' href='/cart'>
            Cart
            {state.cart.cartItems.length > 0 && (
              <span className='ml-1 bg-danger rounded-full px-1 py-.5 text-xs text-light relative bottom-1'>
                {state.cart.cartItems.length}
              </span>
            )}
          </Link>
          <Link className='p-2' href='/login'>
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
