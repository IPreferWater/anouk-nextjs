import { IProject } from '@/interfaces/index'
import { getAllProjectsIds, getProjectByID } from '@/api/project'

type SitemapProps = {
  projects: IProject[]
}

export default function Sitemap({ projects }: SitemapProps) {
    const EXTERNAL_DATA_URL = 'https://www.anoukdesury.com/projects';

    //https://www.sitemaps.org/protocol.html

    return (`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

    <url>
        <loc>https://www.anoukdesury.com</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>yearly</changefreq>

      </url>
      <url>
        <loc>https://www.anoukdesury.com/presse</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>yearly</changefreq>
      </url>
      <url>
        <loc>https://www.anoukdesury.com/apropos</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>yearly</changefreq>
      </url>
      ${projects
        .map(({ id, imgs, date }) => {
          return `
        <url>
            <loc>${EXTERNAL_DATA_URL}/${id}</loc>
            <changefreq>never</changefreq>
            <lastmod>${date}</lastmod>
            ${imgs.map(({ path }) => {
              return `
              <image:image>
                <image:loc>${EXTERNAL_DATA_URL}/${id}/${path}</image:loc>
              </image:image>
              `;
            }).join('')}
        </url>
      `;
        })
        .join('')}
    </urlset>
  `);}


export async function getStaticProps() {
  const projectIds = await getAllProjectsIds()

  const projects = await Promise.all(projectIds.map(async (p) => {
    return await getProjectByID(p.params.id);
}));

  console.log(projects)
  return {
    props: {
        projects
    }
  }
}