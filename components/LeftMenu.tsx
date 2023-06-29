import React from 'react'
import { IProjectIndexLeftMenu } from '../interfaces'
import Link from 'next/link'

type LeftMenuProps = {
  projects: IProjectIndexLeftMenu[]
  }

export const LeftMenu = ( {projects} :LeftMenuProps) => {

return <div className='flex flex-col gap-y-4 font-courier ml-10 text-menu'>
  
  <h1 className='underline font-bold'>Projets</h1>
  {projects.map(({ title, id}) => (
            <Link className='ml-6'  key={id} href={`/projects/${id}`}>{title}</Link>

    )) }

<Link href={`/contact`} className='underline font-bold'>
             Contact
          </Link>
  
</div>
}