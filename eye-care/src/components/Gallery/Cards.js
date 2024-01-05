import React from 'react'
import GalleryCard from './GalleryCard'
const Cards = () => {
   
  return (
    <div>
    {
        data.length ? ( data.map((item,index)=>{
        return (
         <GalleryCard key={index } title={item.title} description={item.description} img={item.img}/>
        )
        })) :[]
       } 
    </div>
  )
}

export default Cards