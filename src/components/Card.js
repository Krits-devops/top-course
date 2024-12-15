import React from 'react'
import {FcLike} from 'react-icons/fc'

const Card = function (props) {
    let course = props.course;
  return (
    <div>
        <div>
            <img src={course.img.url}></img>
        </div>
        <div>
            <button>
                    <FcLike></FcLike>
            </button>
        </div>
        <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>
    </div>
  )
}

export default Card;
