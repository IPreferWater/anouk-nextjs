import { getAllProjectsIds, getAllProjectsTitleSortedByDate, getProjectByID } from '@/api/project'
import {Layout} from '../../components/Layout'
import { IProject, IProjectIndexLeftMenu } from '@/interfaces/index'


type ProjectProps = {
    project: IProject
    allProjects: IProjectIndexLeftMenu[]
}
export default function ProjectPage({project, allProjects}:ProjectProps) {
  
    return (<Layout title="Anouk Desury Projet" metaName = "Projet photo" metaDescription="Presentation et photos du projet d'Anouk Desury" projects={allProjects}>

          <div className='text-center mb-8  font-courier text-[25px] bold '>{project.title}</div>        
        <div className='flex flex-col md:flex-row'>
          {<div>
        <div className='text-[13.5px] m-auto md:mx-2 w-80 prose prose-xl font-courier prose-a:underline prose-a:decoration-orange-500 prose-a:decoration-2 text-justify prose:font-courier' dangerouslySetInnerHTML={{__html:project.body}}/>
          </div>}

        

        {project.imgs.map(url => (
          
             <img
             key = {url}
             src= {`/projects/${project.id}/${url}`}
             className=" my-4 md:mx-2 md:my-0"
             alt="Wild Landscape"
           />
          
        )) }
        </div>
    </Layout>)
}

//TODO typeof ?
export async function getStaticProps(params:any) {
      const project = await getProjectByID(params.params.id)
      const allProjects = getAllProjectsTitleSortedByDate() as IProjectIndexLeftMenu[]
    
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