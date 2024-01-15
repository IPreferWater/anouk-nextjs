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
          <div className='text-center font-courier text-[21px] bold ad:right-0 ad:mr-6 ad:fixed mb-8 ad:top-[70px]'>{project.title}</div>
        <div className='flex flex-col ad:flex-row'>
          {<div>
        <div className='text-justify ad:text-left text-[13.5px] mx-20 ad:mx-0 ad:w-[14rem] ad:mr-2 prose prose-xl font-courier prose-a:underline prose-a:decoration-orange-500 prose-a:decoration-2 text-left prose:font-courier' dangerouslySetInnerHTML={{__html:project.body}}/>
          </div>}

        {project.imgs.map(img => (

             <img
             key = {img.path}
             src= {`/projects/${project.id}/${img.path}`}
             className="img-anouk-display"
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