import React, { useState } from 'react'
import { IProjectIndexLeftMenu } from '../interfaces'
import Link from 'next/link'

type LeftMenuProps = {
  projects: IProjectIndexLeftMenu[]
  }

export const LeftMenu = ( {projects} :LeftMenuProps) => {
  const [projectVisibility, setProjectVisibility] = useState(false)

return <div className='flex flex-col gap-y-4 font-courier ml-16 text-menu'>
      <div className='flex flex row' onClick={() => setProjectVisibility(!projectVisibility)}>

      <h1 className='font-black mr-2' >PROJETS</h1>
      {
          projectVisibility ? <h1> - </h1> : <h1> + </h1>
      }

      </div>



    { projectVisibility? projects.map(({ title, id }) => (
      <Link className='ml-6 mr-2' key={id} href={`/projects/${id}`}>
        {title}
      </Link>
    )) : null}


    <Link href={`/contact`} className='font-bold'>
      CONTACT
    </Link>
  </div>

}