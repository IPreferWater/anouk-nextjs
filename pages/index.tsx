import Link from 'next/link'
import {Layout} from '@/components/Layout'
import { IProjectIndexLeftMenu } from '@/interfaces/index'
import { getAllProjectsTitleSortedByDate } from '@/api/project'

type IndexProps = {
  projects: IProjectIndexLeftMenu[]
}

  export default function IndexPage({ projects } : IndexProps) {

  return (<Layout title="Anouk Desury photographe Roubaix" metaName = "Acceuil" metaDescription="Page d'acceuil d' Anouk Desury photgraphe Roubaix">

<div>
  <h1 className='font-adirek'>projets</h1>
{projects.map(({ title, id}) => (
            <Link  key={id} href={`/projects/${id}`}>
             <p className='font-adirek'> {title}</p>
          </Link>

    )) }
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