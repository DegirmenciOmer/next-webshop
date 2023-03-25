import Head from 'next/head'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
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
      <div>
        <header>header</header>
        <main className='flex min-h-screen flex-col justify-between'>
          {children}
        </main>
        <footer>footer</footer>
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
