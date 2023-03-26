import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='flex h-10 justify-center items-center shadow-inner'>
      <p>Copyright &copy; {currentYear} Next Webshop</p>
    </footer>
  )
}

export default Footer
