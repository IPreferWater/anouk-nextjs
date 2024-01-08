import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { IImg, IPresse, IProject, IProjectIndexLeftMenu, ITemp } from '@/interfaces/index'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'data/_projects')
const projectsImgsDirectory = path.join(process.cwd(), 'public/projects')
const SEPARATOR = "_"

export function getPresse(): IPresse{


    const fileNames = fs.readdirSync("public/presse")

    return {
      imgs: fileNamesToImg(fileNames)
  } as IProject
}

export function getAllProjectsTitleSortedByDate(): IProjectIndexLeftMenu[]{
    const temp = [] as ITemp[]
    const fileNames = fs.readdirSync(projectsDirectory)


    fileNames.forEach(fileName => {

    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
        temp.push({
            title: matterResult.data.title,
            id: getIdFromMdFileName(fileName),
            date: new Date(matterResult.data.date)
        })
    })

  const sorted = temp.sort((objA, objB) => objB.date.getTime() - objA.date.getTime());
  return sorted.map(({ title, id }) => ({ title, id }));
}

export function getAllProjectsIds() {
    const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: getIdFromMdFileName(fileName)
        }
      }
    })
  }

  export async function getProjectByID(id:string): Promise<IProject> {
    const fullPath = path.join(projectsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const parsed = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(matterResult.content)
    const content = String(parsed)
    const data = matterResult.data
    const fullPathImgs = path.join(projectsImgsDirectory, `${id}`)

    const fileNames = fs.readdirSync(fullPathImgs)

    return {
        id: id,
        title: data.title,
        date: data.date,
        body: content,
        imgs: fileNamesToImg(fileNames)
    } as IProject
  }

  function getIdFromMdFileName(fileName:String):string{
    return fileName.replace(/\.md$/, '')
  }

  function fileNamesToImg(fileNames:Array<string>): Array<IImg>{

    const maped =  fileNames.map((fileName => {
      const defaultImg = {alt:fileName,path:fileName,order:0}
      const indexSeparator = fileName.indexOf(SEPARATOR);
      // can't find separator
      if (indexSeparator <0) {
        return defaultImg
      }

      const alt = fileName.substring(0, indexSeparator)
      const orderString = fileName.substring(indexSeparator+1, fileName.length-5)
      const order = parseInt(orderString)
      defaultImg.alt = alt
      defaultImg.order = order
      return defaultImg
    }))

    return maped.sort((objA, objB) => objA.order - objB.order);
  }

