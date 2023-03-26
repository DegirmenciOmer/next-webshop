import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
        <Link className='text-lg font-bold' href='/'>
          Next Webshop
        </Link>
        <div>
          <Link className='p-2' href='/cart'>
            Cart
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
