import Link from 'next/link'
import {Layout} from '@/components/Layout'
import { IProjectIndexLeftMenu } from '@/interfaces/index'
import { getAllProjectsTitleSortedByDate } from '@/api/project'

type IndexProps = {
  projects: IProjectIndexLeftMenu[]
}

  export default function IndexPage({ projects } : IndexProps) {

  return (<Layout title="Anouk Desury photographe Roubaix" metaName = "Acceuil" metaDescription="Page d'acceuil d' Anouk Desury photgraphe Roubaix" projects={projects}>

<div>
  <img className='hidden md:flex' src='/index/index_anouck_desury.jpg' alt='photo de profil d Anouck Desury' />
  <img className='flex md:hidden' src='/index/index_anouck_desury_sm.jpg' alt='photo de profil d Anouck Desury' />

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