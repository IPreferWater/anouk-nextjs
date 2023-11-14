import Link from 'next/link'
import {Layout} from '@/components/Layout'
import { getAllProjectsTitleSortedByDate } from '@/api/project'
import { IProjectIndexLeftMenu } from '@/interfaces/index'

type AProposProps = {
  projects: IProjectIndexLeftMenu[]
}

export default function AProposPage ({ projects } : AProposProps) {

  return (<Layout title="Anouk Desury"  metaName = "à propos" metaDescription="Présentation de Clémentine, couturiere, animatrice d'atelier et directrice de Clementinestla" projects={projects}>
<div className='m-auto w-1/2 text-justify'>
  <h1 className='text-3xl font-bold mb-4'>A propos</h1>
  <p className='text-lg leading-7'>
    Photographe de 28 ans, Anouk Desury découvre Roubaix lorsqu’elle y passe son BTS Photographie puis poursuit ses études avec un DU en Photographie documentaire à Carcassonne avant de retourner s’installer à Roubaix en 2016.

    « Membre de l’agence Light Motiv, la photographie est pour moi une manière de mieux comprendre le monde qui m’entoure. Très attachée à témoigner des histoires et des combats personnels qui, bien souvent, résonnent plus largement, j’ai cette volonté forte de mettre en lumière ceux à qui on laisse trop peu la parole. C’est l’attachement au territoire de Roubaix et à chacune des personnes que je rencontre qui guide ma photographie. Ma démarche photographique se veut le plus souvent comme des immersions dans l’intime au long terme, comme un reflet des relations quotidiennes.
  </p>
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