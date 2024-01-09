import React from 'react'
import { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { IProjectIndexLeftMenu } from '../interfaces'
import Link from 'next/link'


type SmMenuProps = {
  projects: Array<IProjectIndexLeftMenu>
  }

export const SmMenu = ( {projects} :SmMenuProps) => {

return <div>


<Menu as="div" className="relative inline-block text-left font-courier">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm   hover:bg-gray-50">

        <img className='object-contain h-10' src="/icon_menu_sm.svg" alt="icon pour menu sur smartphone"/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2">
          <div className="py-1">
            <h2 className='font-bold'>PROJETS</h2>
          {
 projects.map((project: IProjectIndexLeftMenu,i: number) => {
  return            <Menu.Item key={`${i}-${project.id}`}>
  {({ active }) => (

    <Link
    href={`/projects/${project.id}`}
    className={`block px-4 py-2 text-sm {${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}>
      {project.title}
    </Link>
  )}


</Menu.Item>
})}
 {/* TODO should be better to work on all div once => Wrap "A PROPOS" and "PRESSE" in a separate div */}
 <div className='flex flex-col'>

                <Menu.Item>
                  <Link href={`/presse`} className='font-bold'>
                    PRESSE
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <Link href={`/apropos`} className='font-bold'>
                    A PROPOS
                  </Link>
                </Menu.Item>


              </div>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>


</div>
}