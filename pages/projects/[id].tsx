import {Layout} from '../../components/Layout'


type PlanningProps = {
    planning: string,
    id: string
}
export default function PlanningsPage({planning, id}:PlanningProps) {
    return (<Layout title="Clementinestla planning" metaName = "Planning" metaDescription="Planning, horaires et disponibilité des differents creneaux horaires à l'atelier de Clementinestla">

    </Layout>)
}

/*export async function getStaticProps(context:any){
    const planning = getPlanningByID(context.params.id)
    const id = context.params.id
    return {
        props: {
            planning,
            id
        }
    }
}*/

/*export async function getStaticPaths(){
    let paths = await getAllPlannings()
    const paramsPaths = paths.map(planning => ({
        params: { id:planning.id, title:planning.title }
    }));
    return {
        paths: paramsPaths,
        fallback: false
    }
}*/