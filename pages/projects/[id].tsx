import { getAllProjectsIds, getAllProjectsTitleSortedByDate, getProjectByID } from '@/api/project'
import { Layout } from '../../components/Layout'
import { IImg, IProject, IProjectIndexLeftMenu } from '@/interfaces/index'
import { PersonAnoukDesury } from '@/interfaces/PersonAnoukDesury'
import { Photograph, PhotographAction, Place } from 'schema-dts'
import { PlaceRoubaix } from '@/interfaces/PlaceRoubaix'
import { title } from 'process'
import { PlaceWorkArea } from '@/interfaces/PlaceWorkArea'


type ProjectProps = {
  project: IProject
  allProjects: IProjectIndexLeftMenu[]
  //todo
  ld: any
}
export default function ProjectPage({ project, allProjects, ld }: ProjectProps) {
  const BASE_URL = 'https://www.anoukdesury.com'
  const PhotographAction : PhotographAction = {

    '@type': 'PhotographAction',
    //action
    actionStatus: 'https://schema.org/CompletedActionStatus',
    agent: PersonAnoukDesury,
    //endTime: ld.datePublished,
    //instrument: ld.material,
    //location: getPlaceFromID(ld.placeID),
    location: getPlaceFromID("todo"),
    //object: ld.about,
    //result: ld.result,
    //startTime : ld.dateCreated,
    target: getProjectUrl(),

    // thing
    //additionalType: ld.keywords,
    alternateName: title,
    //description: ld.about,
    image: getUrlFirstImg(),
    mainEntityOfPage: getProjectUrl(),
    name: title,
    //sameAs: ld.sameUrl,
    url : getProjectUrl(),
  }
  
  const photograph: Photograph = {
    '@type': 'Photograph',
    //about: ld.about,
    accountablePerson: PersonAnoukDesury,
    //audience: ld.audience,
    author : PersonAnoukDesury,
    //award : ld.award,
    //contentLocation :  getPlaceFromID(ld.placeID),
    contentLocation :  getPlaceFromID("todo"),
    copyrightHolder : PersonAnoukDesury,
    //copyrightNotice
    //copyrightYear
    creativeWorkStatus: "Published",
    creator: PersonAnoukDesury,
    //dateCreated : ld.dateCreated,
    //datePublished : ld.datePublished,
    //funder same as sponsor
    //genre: ld.genre,
    //headline: ld.headline,
    isFamilyFriendly : true,
    //keywords : ld.keywords,
    //license A license document that applies to this content, typically indicated by URL. 
    //locationCreated: getPlaceFromID(ld.placeID),
    locationCreated: getPlaceFromID("todo"),
    //material: ld.material,
    //publication  	A publication event associated with the item
    spatialCoverage: PlaceWorkArea,
    //sponsor  same as funder
    text: title,
    //typicalAgeRange: ld.ageRange,
  }

  function getProjectUrl() : string {
    const projectPath = project.title.replace(/\s/g, "_")
    return `${BASE_URL}/projects/${projectPath}`;
  }

  function getUrlFirstImg() : string {
    const projectUrl = getProjectUrl()
    const firstImgPath = project.imgs[0].path
    const escapedPath = firstImgPath.replace(/\s/g, "%20")
    return `${projectUrl}/${escapedPath}`;
  }
  
  //TODO for now I just have one place to return
  function getPlaceFromID(id: string): Place {
    return PlaceRoubaix
  }
  function getFirstImagePathOfProject(imgs: IImg[]): string {
    if (imgs.length <= 0) {
      return ''
    }
    return `/projects/${project.id}/${imgs[0].path}`
  }

  {/* og:description will be the description displayed in social-network with links, as the body is already in html format we skip the 3 firsts character and take the maximum size allowed 300 characters*/ }
  return (<Layout
    title="Anouk Desury Projet"
    metaName="Projet photo"
    metaDescription="Presentation et photos du projet d'Anouk Desury"
    projects={allProjects} ogImg={getFirstImagePathOfProject(project.imgs)}
    ogTitle={project.title}
    ogDescription={project.body.substring(3, 300)}
    projectVisibility={true}
    jsonLd={[PhotographAction, photograph]}>

    <div className='text-center font-courier text-[21px] ad:text-right bold ad:mr-6'>{project.title}</div>
    <div className='overflow-x-auto'>
      <div className='flex flex-col ad:flex-row'>
        {<div>
          <div className='text-justify ad:text-left text-[13.5px] mx-20 ad:mx-0 ad:w-[14rem] ad:mr-2 prose prose-xl font-courier prose-a:underline prose-a:decoration-orange-500 prose-a:decoration-2 text-left prose:font-courier' dangerouslySetInnerHTML={{ __html: project.body }} />
        </div>}

        {project.imgs.map(img => (

          <img
            key={img.path}
            src={`/projects/${project.id}/${img.path}`}
            className="img-anouk-display"
            alt={img.alt}
          />

        ))}
      </div>
    </div>
  </Layout>)
}

//TODO typeof ?
export async function getStaticProps(params: any) {
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