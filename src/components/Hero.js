import React,{useState} from 'react'
import url from '../urls.js'
import {BiSolidLeftArrowSquare} from 'react-icons/bi'
import {BiSolidRightArrowSquare} from 'react-icons/bi'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

const Hero = () => {

  const [firstPicture, setFirstPicture]=useState(1)

  function nextPicture(){
    const picture = firstPicture === 0
    const newPicture = picture ? url.length -1 : firstPicture - 1
    setFirstPicture(newPicture)
    //alert(picture, newPicture)
  }

  function prevPicture(){
    const picture = firstPicture === url.length -1
    const newPicture = picture ? 0 : firstPicture + 1
    setFirstPicture(newPicture)
    //alert(picture, newPicture)
  }

  return (
    <div className='w-full min-h-52 md:h-96 lg:h-[600px] xl-h-[720px] border-2 mx-1 md:mx-2 mt-2 relative group'>
        <div style={{backgroundImage: `url(${url[firstPicture]})`}} className='w-full h-full roundex-2xl bg-cover bg-center'></div>
        <div  className='text-2xl absolute hidden group-hover:block top-[50%] rounded-full cursor-pointer translate-x-0 translate-y-[-50%] left-5'><BiSolidLeftArrowSquare onClick={prevPicture}/></div>
        <div className='text-2xl hidden group-hover:block absolute top-[50%] rounded-full cursor-pointer translate-x-0 translate-y-[-50%] right-5'><BiSolidRightArrowSquare  onClick={nextPicture} /></div>
        <div className='flex justify-center'>
          {url.map((index, icon)=>(
            <div className='cursor-pointer mx-1' key={index}><MdOutlineCheckBoxOutlineBlank onClick={()=>{setFirstPicture(icon)}}/></div>
          ))}
        </div>
    </div>
  )
}

export default Hero
