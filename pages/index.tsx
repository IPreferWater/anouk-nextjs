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
const jsonLd: WithContext<Photograph> = {
  '@context': 'https://schema.org',
  '@type': 'Photograph',
  about: 'photo principal du site web d\'Anouk Desury reportage documentaire photo à Roubaix',
  accountablePerson: PersonAnoukDesury,
  audience: 'fan de de boxe roubaix',
  author : PersonAnoukDesury,
  //award An award won by or for this item. Supersedes awards. 
  contentLocation :  PlaceRoubaix,
  copyrightHolder : PersonAnoukDesury,
  //copyrightNotice
  //copyrightYear
  creativeWorkStatus: "Published",
  creator: PersonAnoukDesury,
  dateCreated : '2022-01-01',
  datePublished : '2023-01-01',
  //funder A person or organization that supports (sponsors) something through some kind of financial contribution. 
  genre: 'social sport',
  //headline: Headline of the article. 
  isFamilyFriendly : true,
  keywords : 'reportage documentaire boxe roubaix',
  //license A license document that applies to this content, typically indicated by URL. 
  //locationCreated The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork. 
  material: 'appareil x y z',
  //publication  	A publication event associated with the item
  spatialCoverage: PlaceRoubaix,
  //sponsor  A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event. 
  text: 'describe the main photo',
  typicalAgeRange: '18-90',
  //subjectOf: 	'CreativeWork'

}

/*
const jsonLd: WithContext<ItemList> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Photograph",
        "name": "Photograph 1",
        "image": "https://example.com/photo1.jpg",
        "description": "Description of Photograph 1"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Photograph",
        "name": "Photograph 2",
        "image": "https://example.com/photo2.jpg",
        "description": "Description of Photograph 2"
      }
    },
    // Add more ListItem elements for additional photographs
  ]
}
*/

  return (<Layout
    title="Anouk Desury photographe Roubaix"
    metaName="Acceuil"
    metaDescription="Page d'acceuil d' Anouk Desury photgraphe Roubaix"
    projects={projects}
    ogImg='/projects/les_poings_ouverts/Les poings ouverts Anouk Desury_190.webp'
    ogTitle='Anouk Desury photographe Roubaix'
    ogDescription='Anouk Desury, photographe de reportage social et documentaire basée à Roubaix.'
    projectVisibility={false}>

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