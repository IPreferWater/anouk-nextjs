import { getAllProjectsIds, getAllProjectsTitleSortedByDate, getProjectByID } from '@/api/project'
import {Layout} from '../../components/Layout'
import { IProject, IProjectIndexLeftMenu } from '@/interfaces/index'


type ProjectProps = {
    project: IProject
    allProjects: IProjectIndexLeftMenu[]
}
export default function ProjectPage({project, allProjects}:ProjectProps) {
  
    return (<Layout title="Anouk Desury Projet" metaName = "Projet photo" metaDescription="Presentation et photos du projet d'Anouk Desury" projects={allProjects}>

        <div className='flex flex-row items-center mb-8 font-courier'>
          <div className='text-2xl bold'>{project.title}</div>
          <div className='px-4'>-</div>
          <div>{project.date}</div>
          
        </div>

        <div className='flex flex-col md:flex-row max-h-screen'>
          {<div>
        <div className='w-96 prose prose-xl prose-a:underline prose-a:decoration-orange-500 prose-a:decoration-2 prose:text-center prose:font-courier' dangerouslySetInnerHTML={{__html:project.body}}/>
</div>}

        {/*<Carousel className="rounded-xl">
      <div className="relative h-full w-1/2">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
</Carousel>*/}

        {project.imgs.map(url => (
          
             <img
             key = {url}
             src= {`/projects/${project.id}/${url}`}
             className="object-cover my-2 md:mx-2 md:my-0"
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