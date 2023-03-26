import Head from 'next/head'
import Link from 'next/link'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
type TLayoutProps = {
  title?: string
  keywords?: string
  description?: string
  children: ReactNode
}
const Layout: FC<PropsWithChildren<TLayoutProps>> = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen flex flex-col justify-between'>
        <Header />
        <main className='container m-auto mt-4 px-4'>{children}</main>{' '}
        <Footer />
      </div>
    </>
  )
}
Layout.defaultProps = {
  title: 'Next Webshop',
  keywords: 'ecommerce, webshop, game, electronic, home, pc',
  description: 'Welkom bij Next Webshop',
}
export default Layout
