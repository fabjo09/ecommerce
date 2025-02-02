import React, { ReactNode } from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Monkey Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout