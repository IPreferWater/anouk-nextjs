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


        {project.title} - {project.date}

        <div className='flex flex-col md:flex-row'>
        <div className='prose prose-xl mx-auto prose-a:underline prose-a:decoration-orange-500 prose-a:decoration-2 prose:text-center' dangerouslySetInnerHTML={{__html:project.body}}/>

        {project.imgs.map(url => (
             <img
             key = {url}
             src= {`/projects/${project.id}/${url}`}
             className=""
             alt="Wild Landscape"
             /*onClick={(e) => moveCarrousel(e, +1)}*/
           />
    )) }
        </div>
    </Layout>)
}

//TODO typeof ?
export async function getStaticProps(params:any) {
      const project = await getProjectByID(params.params.id)
    console.log(project)
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