import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { IProject, IProjectIndexLeftMenu } from '@/interfaces/index'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'data/_projects')
const projectsImgsDirectory = path.join(process.cwd(), 'public/projects')

export function getAllProjectsTitleSortedByDate(): IProjectIndexLeftMenu[]{
    const res = [] as IProjectIndexLeftMenu[]
    const fileNames = fs.readdirSync(projectsDirectory)
    fileNames.forEach(fileName => {

    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
        res.push({
            title: matterResult.data.title,
            id: getIdFromMdFileName(fileName)
        })
    })

    return res
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

    //load imgs urls
    const fullPathImgs = path.join(projectsImgsDirectory, `${id}`)
    //const fileImgsContents = fs.readFileSync(fullPath, 'utf8')

    const fileNames = fs.readdirSync(fullPathImgs)
    //TODO this is only for local test
    //var filtered = fileNames.filter(function (f) { return f.endsWith("Zone.Identifier"); });

    //console.log(filtered)
    return {
        id: id,
        title: data.title,
        date: data.date,
        body: content,
        imgs: fileNames
    } as IProject
  }

  function getIdFromMdFileName(fileName:String):string{
    return fileName.replace(/\.md$/, '')
  }

