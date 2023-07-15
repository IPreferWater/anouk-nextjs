import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {LeftMenu} from '@/components/LeftMenu'
import {SmMenu} from '@/components/SmMenu'
import 'tailwindcss/tailwind.css'
import { IProjectIndexLeftMenu } from '../interfaces'

type Props = {
  children?: ReactNode
  title: string
  metaName: string,
  metaDescription: string,
  projects: Array<IProjectIndexLeftMenu>
}

export const Layout = ({ children, title, metaName, metaDescription, projects}: Props) => {

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
      <Link className='m-6 font-courier text-[30px]' href="/">
          Anouk Desury
        </Link>
        <div className='block md:hidden'><SmMenu projects={projects}/></div>
    </div>
    </header>

    <div className='hidden md:flex flex-row'>
      <div className='w-1/5 mr-8 fixed bg-white h-screen'><LeftMenu projects={projects}/></div>
      <div className='w-2/5'></div>
      <div>{children}</div>
    </div>

    <div className='block md:hidden'>
    {children}
    </div>
  </div>
}
