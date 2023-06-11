import { getAllProjectsIds, getProjectByID } from '@/api/project'
import {Layout} from '../../components/Layout'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { IProject } from '@/interfaces/index'


type ProjectProps = {
    project: IProject
}
export default function ProjectPage({project}:ProjectProps) {
    return (<Layout title="Anouk Desury Projet" metaName = "Projet photo" metaDescription="Presentation et photos du projet d'Anouk Desury">

<div className='prose prose-xl mx-auto prose-a:underline prose-a:decoration-orange-500 prose-a:decoration-2 prose:text-center' dangerouslySetInnerHTML={{__html:project.body}}/>
        {project.title} - {project.date}
    </Layout>)
}

//TODO typeof ?
export async function getStaticProps(params:any) {
      const project = await getProjectByID(params.params.id)

      return {
        props: {
          project
        }
      }
    }

export async function getStaticPaths() {
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false
  }
}