import { Layout } from '@/components/Layout'
import { Success } from '@/components/Success'
import { getAllProjectsTitleSortedByDate, calculateAge } from '@/api/project'
import { IProjectIndexLeftMenu } from '@/interfaces/index'
import { PersonAnoukDesury } from '@/interfaces/PersonAnoukDesury'

type AProposProps = {
  projects: IProjectIndexLeftMenu[]
  age: number
}

export default function AProposPage({ projects, age }: AProposProps) {

  return (<Layout
    title="Anouk Desury"
    metaName="à propos"
    metaDescription="Présentation d'Anouk Desury Photographe à Roubaix"
    projects={projects} ogImg='anouk_a_propos.webp'
    ogTitle='Anouk Desury photographe Roubaix'
    ogDescription='Anouk Desury, photographe de reportage social et documentaire basée à Roubaix. Photographe de 28 ans, Anouk Desury découvre Roubaix lorsqu’elle y passe son BTS Photographie puis poursuit ses études avec un DU en Photographie ...'
    projectVisibility={false}
    jsonLd={[PersonAnoukDesury]}>
    
    <div className='m-auto w-3/4 text-justify font-courier'>
      <h1 className='text-8xl font-bold mb-4'>A propos</h1>
      <div className='flex flex-col ad:flex-row gap-x-8'>
        <img className="mb-8 object-contain object-top" src="anouk_a_propos.webp" alt="photo profil anouk desury" />

        <p className='text-lg leading-7'>
          Photographe de {age} ans, Anouk Desury découvre Roubaix lorsqu’elle y passe son BTS Photographie puis poursuit ses études avec un DU en Photographie documentaire à Carcassonne avant de retourner s’installer à Roubaix en 2016.

          « Membre de l’agence Light Motiv, la photographie est pour moi une manière de mieux comprendre le monde qui m’entoure. Très attachée à témoigner des histoires et des combats personnels qui, bien souvent, résonnent plus largement, j’ai cette volonté forte de mettre en lumière ceux à qui on laisse trop peu la parole. C’est l’attachement au territoire de Roubaix et à chacune des personnes que je rencontre qui guide ma photographie. Ma démarche photographique se veut le plus souvent comme des immersions dans l’intime au long terme, comme un reflet des relations quotidiennes. »
        </p>
      </div>
      <div>

      <div className='flex flex-col gap-y-6 mt-6'>
      <Success
        dateStr="2021"
        success="Lauréate de la Grande commande photographique du Ministère de la Culture et de la Bibliothèque Nationale de France"
      />
      <Success
        dateStr="2024"
        success="Artiste résidente CLEA (Contrat Local d'Education Artistique) à Roubaix - Tourcoing"
      />
      <Success
        dateStr="2024"
        success="Exposition « Les poings ouverts » au Musée de la Piscine de Roubaix"
      />
      <Success
        dateStr="2024"
        success="Exposition « Les poings ouverts - Shaïna » avec l'Institut pour la Photographie au Colysée de Lambersart"
      />
    </div>

      </div>
      <div className='flex flex-col my-6 gap-y-4 text-blue-500'>
        <a href="mailto:anoukdesury@gmail.com">anoukdesury@gmail.com</a>
        <a href="mailto:anouk@lightmotiv.com">anouk@lightmotiv.com</a>
        <a href="https://www.instagram.com/anoukdesury" target="_blank">instagram</a>
        <a href="tel:+33665236565">+33665236565</a>
      </div>

    </div>
  </Layout>)


}

export async function getStaticProps() {
  const projects = getAllProjectsTitleSortedByDate() as IProjectIndexLeftMenu[]
  const age = calculateAge('1995-11-14')
  return {
    props: {
      projects,
      age
    },
    //2 months
    revalidate: 60 * 24 * 60 * 60
  }
}