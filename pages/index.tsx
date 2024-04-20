import { Layout } from '@/components/Layout'
import { IProjectIndexLeftMenu } from '@/interfaces/index'
import { getAllProjectsTitleSortedByDate } from '@/api/project'
import { Photograph, Place, Product, WithContext } from 'schema-dts'
import { PersonAnoukDesury } from '@/interfaces/PersonAnoukDesury'

type IndexProps = {
  projects: IProjectIndexLeftMenu[]
}

export default function IndexPage({ projects }: IndexProps) {


const PlaceRoubaix: Place = {
  "@type": "Place",
  "name": "Roubaix",
  "description": "Salle de boxe de l'alma",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Champ de Mars, 5 Avenue Anatole France",
    "addressLocality": "Roubaix",
    "addressRegion": "Nord",
    "postalCode": "59510",
    "addressCountry": "France"
  },
  "geo": {
    "@type": "GeoCoordinates",
    //"latitude": 48.8584,
    //"longitude": 2.2945
  }
}


  return (<Layout
    title="Anouk Desury photographe Roubaix"
    metaName="Acceuil"
    metaDescription="Page d'acceuil d' Anouk Desury photgraphe Roubaix"
    projects={projects}
    ogImg='/projects/les_poings_ouverts/Les poings ouverts Anouk Desury_190.webp'
    ogTitle='Anouk Desury photographe Roubaix'
    ogDescription='Anouk Desury, photographe de reportage social et documentaire basée à Roubaix.'
    projectVisibility={false}
    jsonLd={[]}>

    <div>
      <img className='object-contain ad:flex ad:ml-56 h-screen ad:h-[600px]' src='/projects/les_poings_ouverts/Les poings ouverts Anouk Desury_190.webp' alt='photo de profil d Anouck Desury' />
    </div>
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