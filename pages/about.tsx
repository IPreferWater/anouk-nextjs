import Link from 'next/link'
import {Layout} from '../components/Layout'
import { getAllProjectsTitleSortedByDate } from '@/api/project'
import { IProjectIndexLeftMenu } from '../interfaces'

type AboutProps = {
  projects: IProjectIndexLeftMenu[]
}

const AboutPage = ({ projects } : AboutProps) => (
  <Layout title="Clementinestla"  metaName = "à propos" metaDescription="Présentation de Clémentine, couturiere, animatrice d'atelier et directrice de Clementinestla" projects={projects}>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        Go home
      </Link>
    </p>
  </Layout>
)

export async function getStaticProps() {
  const projects = getAllProjectsTitleSortedByDate() as IProjectIndexLeftMenu[]
  return {
    props: {
      projects
    }
  }
}

export default AboutPage
