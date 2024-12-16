import React from 'react'
import {FcLike} from 'react-icons/fc'

const Card = function (props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
         
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}></img>

           <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 
            bottom-3 grid place-items-center'>
                <button onClick={clickHandler}>
                        <FcLike fontSize="1.5rem"></FcLike>
                </button>
           </div>

        </div>
       
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>{course.description}</p>
        </div>
    </div>
  )
}

export default Card;
