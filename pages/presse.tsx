import Link from 'next/link'
import {Layout} from '@/components/Layout'
import { getAllProjectsTitleSortedByDate, getPresse } from '@/api/project'
import { IPresse, IProjectIndexLeftMenu } from '@/interfaces/index'

type PresseProps = {
  presse: IPresse
  allProjects: IProjectIndexLeftMenu[]
}

export default function PressePage ({ presse, allProjects } : PresseProps) {

  return (<Layout title="Anouk Desury Projet" metaName = "Projet photo" metaDescription="Presentation et photos du projet d'Anouk Desury" projects={allProjects}>
  <div className='overflow-x-auto'>
      <div className='text-center font-courier text-[21px] bold ad:right-0 ad:mr-6 ad:fixed mb-8 ad:top-[70px]'>Presse</div>
    <div className='flex flex-col ad:flex-row'>
      {<div>
    <div className='text-justify ad:text-left text-[13.5px] mx-20 ad:mx-0 ad:w-[14rem] ad:mr-2 prose prose-xl font-courier prose-a:underline prose-a:decoration-orange-500 prose-a:decoration-2 text-left prose:font-courier'>
bla bla bla bla
        </div>
      </div>}

    {presse.imgs.map(img => (

         <img
         key = {img.path}
         src= {`/presse/${img.path}`}
         className="max-h-[600px] my-4 ad:mx-2 ad:my-0 object-contain"
         alt={img.alt}
       />

    )) }
    </div>
    </div>
</Layout>)
}

export async function getStaticProps() {
  const presse = getPresse() as IPresse
  const allProjects = getAllProjectsTitleSortedByDate() as IProjectIndexLeftMenu[]
  return {
    props: {
      presse,
      allProjects
    }
  }
}