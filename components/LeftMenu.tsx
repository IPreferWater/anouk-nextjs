import React, { useState } from 'react'
import { IProjectIndexLeftMenu } from '../interfaces'
import Link from 'next/link'

type LeftMenuProps = {
  projects: IProjectIndexLeftMenu[]
  }

export const LeftMenu = ( {projects} :LeftMenuProps) => {
  const [projectVisibility, setProjectVisibility] = useState(false)

return <div className='flex flex-col gap-y-4 font-courier text-menu min-w-[220px] max-w-[220px]  ml-16 mr-2'>
      <div className='flex flex row' onClick={() => setProjectVisibility(!projectVisibility)}>

      <h1 className='font-black mr-2' >PROJETS</h1>
      {
          projectVisibility ? <h1> - </h1> : <h1> + </h1>
      }

      </div>


        <div className='flex flex-col gap-y-4 ml-6'>
    { projectVisibility? projects.map(({ title, id }) => (
      <Link className='' key={id} href={`/projects/${id}`}>
        {title}
      </Link>
    )) : null}
    </div>

    <Link href={`/presse`} className='font-bold'>
      PRESSE
    </Link>

    <Link href={`/apropos`} className='font-bold'>
      A PROPOS
    </Link>

    <Link href={`https://www.instagram.com/anoukdesury/`} target='_blank' className='font-bold'>
    <img className='object-contain h-10' src="/icon_instagram.svg" alt="icon redirection instagram"/>
    </Link>

  

  </div>

}