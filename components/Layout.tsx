import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {LeftMenu} from '@/components/LeftMenu'
import {SmMenu} from '@/components/SmMenu'
import 'tailwindcss/tailwind.css'
import { IProjectIndexLeftMenu } from '../interfaces'

type LayoutProps = {
  children?: ReactNode
  title: string
  metaName: string,
  metaDescription: string,
  projects: Array<IProjectIndexLeftMenu>
  ogImg: string,
  ogTitle: string
}

export const Layout = ({ children, title, metaName, metaDescription, projects, ogImg, ogTitle}: LayoutProps) => {

  return <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Anouk Desury, photographe de reportage sociale et documentaire basée à Roubaix." />
      <link rel="shortcut icon" href="favicon.gif" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name={metaName} content={metaDescription}/>

    <meta property="og:title" content={ogTitle} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.anoukdesury.com" />
    <meta property="og:image" content={ogImg} />
    <meta property="og:image:width" content="640" />
    <meta property="og:image:height" content="442" />
    </Head>
    <header className='mb-4'>


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
