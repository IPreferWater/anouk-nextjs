import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {LeftMenu} from '@/components/LeftMenu'
import {SmMenu} from '@/components/SmMenu'
import 'tailwindcss/tailwind.css'

type Props = {
  children?: ReactNode
  title: string
  metaName: string,
  metaDescription: string
}

export const Layout = ({ children, title, metaName, metaDescription}: Props) => {

  return <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />      
      <link rel="shortcut icon" href="favicon.gif" />
    </Head>
    <header className='mb-4'>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name={metaName} content={metaDescription}/>
    <div className='flex flex-row justify-between'>
      <Link className='text-5xl font-courier' href="/">
          Anouk Desury
        </Link>
        <div className='visible md:invisible'><SmMenu/></div>
    </div>
    </header>

    <div className='invisible md:visible flex flex-row'>
      <div className='bg-blue-200 w-1/5'><LeftMenu/></div>
      <div className='bg-red-300'>{children}</div>
    </div>

    <div className='visible md:invisible bg-red-300'>
    {children}
    </div>
  </div>
}
