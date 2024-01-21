import {Layout} from '@/components/Layout'
import { getAllProjectsTitleSortedByDate, getFirstImagePathOfProject, getPresse } from '@/api/project'
import { IPresse, IProjectIndexLeftMenu } from '@/interfaces/index'

type PresseProps = {
  presse: IPresse
  allProjects: IProjectIndexLeftMenu[]
}

export default function PressePage ({ presse, allProjects } : PresseProps) {

  return (<Layout title="Anouk Desury Projet" metaName = "Projet photo" metaDescription="Presentation et photos du projet d'Anouk Desury" projects={allProjects} ogImg={`/presse/${presse.imgs[0].path}`} ogTitle='Presse Anouk Desury'>
  <div className='overflow-x-auto'>
    <div className='flex flex-col ad:flex-row'>

    {presse.imgs.map(img => (

         <img
         key = {img.path}
         src= {`/presse/${img.path}`}
         className="img-anouk-display"
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