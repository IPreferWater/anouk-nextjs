import Link from 'next/link'
import {Layout} from '@/components/Layout'
import { getAllProjectsTitleSortedByDate } from '@/api/project'
import { IProjectIndexLeftMenu } from '@/interfaces/index'

type ContactProps = {
  projects: IProjectIndexLeftMenu[]
}

export default function ContactPage ({ projects } : ContactProps) {

  return (<Layout title="Clementinestla"  metaName = "à propos" metaDescription="Présentation de Clémentine, couturiere, animatrice d'atelier et directrice de Clementinestla" projects={projects}>
    <h1>Contact</h1>
    <p>This page is under construction</p>
      <Link href="/">
        Go home
      </Link>
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