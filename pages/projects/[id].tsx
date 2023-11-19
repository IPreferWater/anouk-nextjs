import { getAllProjectsIds, getAllProjectsTitleSortedByDate, getProjectByID } from '@/api/project'
import {Layout} from '../../components/Layout'
import { IProject, IProjectIndexLeftMenu } from '@/interfaces/index'


type ProjectProps = {
    project: IProject
    allProjects: IProjectIndexLeftMenu[]
}
export default function ProjectPage({project, allProjects}:ProjectProps) {

    return (<Layout title="Anouk Desury Projet" metaName = "Projet photo" metaDescription="Presentation et photos du projet d'Anouk Desury" projects={allProjects}>
      <div className='overflow-x-auto'>
          <div className='text-center font-courier text-[21px] bold lg:right-0 lg:mr-6 lg:fixed mb-8 lg:top-[70px]'>{project.title}</div>
        <div className='flex flex-col lg:flex-row'>
          {<div>
        <div className='text-justify lg:text-left text-[13.5px] mx-20 lg:mx-0 lg:w-[14rem] lg:mr-2 prose prose-xl font-courier prose-a:underline prose-a:decoration-orange-500 prose-a:decoration-2 text-left prose:font-courier' dangerouslySetInnerHTML={{__html:project.body}}/>
          </div>}

        {project.imgs.map(img => (

             <img
             key = {img.path}
             src= {`/projects/${project.id}/${img.path}`}
             className="max-h-[600px] my-4 lg:mx-2 lg:my-0 "
             alt={img.alt}
           />

        )) }
        </div>
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