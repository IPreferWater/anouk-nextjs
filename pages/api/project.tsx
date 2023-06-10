import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { IProject, IProjectIndexLeftMenu } from '@/interfaces/index'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'


const projectsDirectory = path.join(process.cwd(), 'data/_projects')


export function getAllProjectsTitleSortedByDate(): IProjectIndexLeftMenu[]{
    const res = [] as IProjectIndexLeftMenu[]
    const fileNames = fs.readdirSync(projectsDirectory)
    fileNames.forEach(fileName => {

    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
        res.push({
            title: matterResult.data.title,
            id: matterResult.data.id
        })
    })

    return res
}
  //todo by date
export function getAllProjectsSortedByDate(): IProject[]{
    // Get files
  const fileNames = fs.readdirSync(projectsDirectory)
  const res = [] as IProject[]

  /*const allProjects = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const date = matterResult.data.date
    console.log()
    const parsed = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(matterResult.content)

    //set the html instead of the markdown
    const content = String(parsed)

    res.push({
        title: matterResult.data.title,
        date: matterResult.data.date,
        body: content
    })
  })
  console.log(res)*/

  return res

}

/*export function getPlanningByID(id:String): IPlanning{
    const fullPath = path.join(planningsDirectory, `${id}.json`)
    const planningString = fs.readFileSync(fullPath, 'utf8')
    const planing: IPlanning = JSON.parse(planningString);
    return planing
}*/

/*function getPlanningNameByID(id:String){

    const arr = id.split("_", 2)
    const monthStr = arr[1]
    const monthNumber = parseInt(monthStr)
    const monthLabel = getMonthLabelFromInt(monthNumber)

    return `${monthLabel} - ${arr[0]}`
}*/

const arrMonthsString = ["","janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"]

export function getMonthLabelFromInt(month:number){
    return arrMonthsString[month]
}

export function getLabelDay(year:string, month:string, day:string) {
    var date = new Date(`${year}/${month}/${day}`);
    return date.toLocaleDateString("fr-FR", { weekday: 'long' });
  }