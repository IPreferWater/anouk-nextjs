import React, { useState } from 'react'


/*type ItemProps = {
  // WARNING the title is used as a key, it need to be unique
  title?: string
  txts?: Array<string>
  img?: string
  }*/

export const SmMenu = ( /*{title, txts, img} : ItemProps*/) => {

  const [stateIsCollapse, setstateIsCollapse] = useState(true);
const links = ["blablabla","hahahaa"]
return <div>
  {
    stateIsCollapse ?

    <div onClick={() => setstateIsCollapse(false)}>XXX</div> :

<div  className='flex flex-col gap-y-4'>
  <div onClick={() => setstateIsCollapse(true)}>[X]</div>
  <h1>Projets</h1>
  {
 links.map((str: string,i: number) => {
  return <p className='text-slate-700' key={i}>{str}</p>
})}
  <h1>Contact</h1>
</div>
  }
  

</div>
}