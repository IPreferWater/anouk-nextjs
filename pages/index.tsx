import {Layout} from '@/components/Layout'
import { IProjectIndexLeftMenu } from '@/interfaces/index'
import { getAllProjectsTitleSortedByDate } from '@/api/project'

type IndexProps = {
  projects: IProjectIndexLeftMenu[]
}

  export default function IndexPage({ projects } : IndexProps) {

  return (<Layout title="Anouk Desury photographe Roubaix" metaName = "Acceuil" metaDescription="Page d'acceuil d' Anouk Desury photgraphe Roubaix" projects={projects} ogImg='/projects/les_poings_ouverts/Les poings ouverts Anouk Desury_190.webp' ogTitle='Anouk Desury photographe Roubaix' ogDescription='Anouk Desury, photographe de reportage social et documentaire basée à Roubaix.'>

<div>
  <img className='object-contain ad:flex ad:ml-56 h-screen ad:h-[600px]' src='/projects/les_poings_ouverts/Les poings ouverts Anouk Desury_190.webp' alt='photo de profil d Anouck Desury' />
</div>
  </Layout>)
}

export async function getStaticProps() {
  const projects = getAllProjectsTitleSortedByDate() as IProjectIndexLeftMenu[]
  return {
    props: {
      projects
    }
  }
}