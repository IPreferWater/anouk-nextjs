import { getAllProjectsIds, getAllProjectsTitleSortedByDate, getProjectByID } from '@/api/project'
import {Layout} from '../../components/Layout'
import { IProject, IProjectIndexLeftMenu } from '@/interfaces/index'


type ProjectProps = {
    project: IProject
    allProjects: IProjectIndexLeftMenu[]
}
export default function ProjectPage({project, allProjects}:ProjectProps) {
  
    return (<Layout title="Anouk Desury Projet" metaName = "Projet photo" metaDescription="Presentation et photos du projet d'Anouk Desury" projects={allProjects}>


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
      const allProjects = getAllProjectsTitleSortedByDate() as IProjectIndexLeftMenu[]
    console.log(project)
      return {
        props: {
          project,
          allProjects
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