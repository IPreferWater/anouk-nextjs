import React from 'react'
import { IProjectIndexLeftMenu } from '../interfaces'
import Link from 'next/link'

type LeftMenuProps = {
  projects: IProjectIndexLeftMenu[]
  }

export const LeftMenu = ( {projects} :LeftMenuProps) => {

return <div className='flex flex-col gap-y-4 font-courier'>
  
  <h1 className='underline'>Projets</h1>
  {projects.map(({ title, id}) => (
            <Link  key={id} href={`/projects/${id}`}>
             <p> {title}</p>
          </Link>

    )) }

<Link href={`/contact`} className='underline'>
             Contact
          </Link>
  
</div>
}