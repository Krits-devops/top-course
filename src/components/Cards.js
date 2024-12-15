import React from 'react'
import Card from './Card';
const Cards = function (props) {
    let courses = props.courses;
    console.log('printng data')
    console.log(courses);

    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach(array =>{
            array.forEach(courseData =>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }

  return (
    <div>
        {
            getCourses().map((course)=>(
                <Card key={courses.id} course={course}/>
            ))
        }
    </div>
  )
}

export default Cards;
