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
      <meta name="description" content="Anouk Desury, photographe de reportage sociale et documentaire basée à Roubaix." />
      <link rel="shortcut icon" href="favicon.gif" />
    </Head>
    <header className='mb-4'>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name={metaName} content={metaDescription}/>
    <div className='flex flex-row justify-between'>
      <Link className='m-6 ml-16  font-skeina text-[30px]' href="/">
          <div className=''>Anouk Desury</div>
        </Link>
        <div className='block ad:hidden'><SmMenu projects={projects}/></div>
    </div>
    </header>

    <div className='block ad:hidden'>
    {children}
    </div>

    <div className='hidden ad:flex flex-row'>
      <LeftMenu projects={projects}/>
      <div className='ml-6'>{children}</div>
    </div>


  </div>
}
