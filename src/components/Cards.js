import React from "react";
import Card from "./Card";

const Cards = ({courses})=>{

    // It return all courses information recieved from api response.
     let allCourses=[];
    const getCourses = ()=>{
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
        })
    })
    return allCourses;
   
}   
    return(
        <div>
            {
            getCourses().map((course)=>{
                <Card/>
            })
        }
        </div>
    )
}

export default Cards;