import React from 'react'
import Card from './components/Card'
import { useRef } from 'react';

function Foreground() {
    const ref = useRef(null);
    const data =[
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false ,
            tag:{isOpen: true, tagTitle:"download now", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false ,
            tag:{isOpen: true, tagTitle:"download now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: false ,
            tag:{isOpen: true, tagTitle:"upload", tagColor: "green"},
        }
    ];
  return (
    <>
         <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
          {data.map((item,index)=>(
            <Card data={item} reference = {ref}/>
          ))}
         </div>
 
    </>
  )
}

export default Foreground