import React from 'react'


/*type ItemProps = {
  // WARNING the title is used as a key, it need to be unique
  title?: string
  txts?: Array<string>
  img?: string
  }*/

export const LeftMenu = ( /*{title, txts, img} : ItemProps*/) => {

const links = ["blablabla","hahahaa"]
return <div className='flex flex-col gap-y-4'>
  
  {//render sentences if defined
 links.map((str: string,i: number) => {
  return <p className='text-slate-700' key={i}>{str}</p>
}) 
}
  
</div>
}