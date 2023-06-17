import React from 'react'
import { IProjectIndexLeftMenu } from '../interfaces'
import Link from 'next/link'

type LeftMenuProps = {
  projects: IProjectIndexLeftMenu[]
  }

export const LeftMenu = ( {projects} :LeftMenuProps) => {

return <div className='flex flex-col gap-y-4'>
  
  <h1 className='underline'>Projets</h1>
  {projects.map(({ title, id}) => (
            <Link  key={id} href={`/projects/${id}`}>
             <p className='font-courier'> {title}</p>
          </Link>

    )) }
  
</div>
}