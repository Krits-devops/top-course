import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = function (props) {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){

        //  if(likedCourses.includes(course.id)){
        //     // It means its already liked 

        //     setLikedCourses((prev) => prev.filter((cid)=> (cid !== course.id)));
        //     toast.warning("liked removed");

        //  }
        //  else{
        //     // Its not liked
        //     if(likedCourses.length === 0){
        //         setLikedCourses([course.id])
        //     }else{
        //         // If its non empty
        //         setLikedCourses((prev)=> [...prev,course.id])
        //     }
        //  }
        //  toast.success('Liked Succesfully');

         if (likedCourses.includes(course.id)) {
            // Already liked, remove it
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like removed");
        } else {
            // Not liked, add it
            setLikedCourses((prev) => [...prev, course.id]);
            toast.success("Liked successfully");
        }
    }
 

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}></img>

           <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 
            bottom-3 grid place-items-center'>
                <button onClick={clickHandler}>
                        {
                           likedCourses.includes(course.id) ? (<FcLike fontSize="1.5rem"></FcLike>) :
                           (<FcLikePlaceholder fontSize="1.5rem"></FcLikePlaceholder>)
                        }
                        
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
