export type IProjectIndexLeftMenu = {
  title: string
  id: string
}

export type ITemp = {
  title: string
  id: string
  date: Date
}

export type IProject = {
  id: string
  title: string
  body: string
  imgs: Array<IImg>
}

export type IImg = {
  alt: string
  path: string
  order : number
}